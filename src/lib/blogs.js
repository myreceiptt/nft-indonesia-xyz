import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";
import sharp from "sharp";

const CONTENT_DIR = path.join(process.cwd(), "content");
const MDX_EXT = ".mdx";

function walkDir(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith(MDX_EXT)) {
      files.push(fullPath);
    }
  }
  return files;
}

function getFlattenedPath(filePath) {
  const rel = path.relative(CONTENT_DIR, filePath);
  const noExt = rel.slice(0, -MDX_EXT.length);
  return noExt.endsWith("/index") ? noExt.slice(0, -"/index".length) : noExt;
}

function buildToc(raw) {
  const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  const slugger = new GithubSlugger();
  return Array.from(raw.matchAll(regulrExp)).map(({ groups }) => {
    const flag = groups?.flag;
    const content = groups?.content;
    return {
      level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
      text: content,
      slug: content ? slugger.slug(content) : undefined,
    };
  });
}

async function getImageData(imagePath, fileDir) {
  if (!imagePath || typeof imagePath !== "string") return null;

  const normalized = imagePath.replace(/\\/g, "/");
  const isRemote = normalized.startsWith("http://") || normalized.startsWith("https://");

  let publicPath = normalized;
  if (!isRemote) {
    if (publicPath.includes("/public/")) {
      publicPath = publicPath.split("/public/")[1];
    } else if (publicPath.startsWith("../public/") || publicPath.startsWith("./public/")) {
      publicPath = publicPath.replace(/^(\.\.\/)+public\//, "");
      publicPath = publicPath.replace(/^\.\/public\//, "");
    } else if (publicPath.startsWith("public/")) {
      publicPath = publicPath.replace(/^public\//, "");
    }
    if (!publicPath.startsWith("/")) publicPath = `/${publicPath}`;
  }

  if (isRemote) {
    return { filePath: publicPath };
  }

  const resolved = path.resolve(fileDir, imagePath);
  if (!fs.existsSync(resolved)) {
    return { filePath: publicPath };
  }

  const image = sharp(resolved);
  const meta = await image.metadata();
  const width = meta.width || 1;
  const height = meta.height || 1;

  const buffer = await image.resize(16).toBuffer();
  const ext = path.extname(resolved).replace(".", "").toLowerCase();
  const mime = ext === "jpg" ? "jpeg" : ext || "png";
  const blurDataURL = `data:image/${mime};base64,${buffer.toString("base64")}`;

  return {
    filePath: publicPath,
    width,
    height,
    blurhashDataUrl: blurDataURL,
  };
}

async function parseBlogFile(filePath) {
  const fileDir = path.dirname(filePath);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const flattenedPath = getFlattenedPath(filePath);

  const image = await getImageData(data.image, fileDir);

  return {
    title: data.title,
    description: data.description,
    image,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    isPublished: data.isPublished !== false,
    author: data.author,
    tags: Array.isArray(data.tags) ? data.tags : [],
    url: `/blogs/${flattenedPath}`,
    readingTime: readingTime(content),
    toc: buildToc(content),
    body: {
      raw: content,
    },
    _raw: {
      flattenedPath,
    },
  };
}

export async function getAllBlogs() {
  const files = walkDir(CONTENT_DIR);
  const blogs = await Promise.all(files.map((file) => parseBlogFile(file)));
  return blogs;
}

export async function getBlogBySlug(slug) {
  const blogs = await getAllBlogs();
  return blogs.find((blog) => blog._raw.flattenedPath === slug);
}

export async function getBlogSlugs() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => blog._raw.flattenedPath);
}
