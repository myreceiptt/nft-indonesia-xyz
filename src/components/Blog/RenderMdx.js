import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import VideoSource from "./VideoSource";
import YouTube from "./YouTube";
import AudioSource from "./AudioSource";
import CustomLink from "./CustomLink";

const MdxImage = (props) => (
  // Use a plain img to avoid runtime issues with MDX + next/image
    <img {...props} />
);

const mdxComponents = {
  Image: MdxImage,
  VideoSource,
  YouTube,
  AudioSource,
  a: CustomLink,
};

const RenderMdx = async ({ source }) => {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]],
      },
    },
  });

  return (
    <div className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-dark/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-dark prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-dark dark:prose-invert dark:prose-blockquote:border-light dark:prose-blockquote:bg-light/20 dark:prose-li:marker:text-light first-letter:text-3xl sm:first-letter:text-5xl">
      {content}
    </div>
  );
};

export default RenderMdx;
