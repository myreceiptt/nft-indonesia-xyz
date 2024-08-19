import RiSoll from "@/src/components/Elements/RiSoll";
import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `Activities: ${params.slug.replaceAll("-", " ")}`,
    description: `Read more about ${
      params.slug === "all" ? "work in progress" : params.slug
    } activities through our collection of all published content.`,
  };
}

const CategoryPage = ({ params }) => {
  // Separating logic to create list of categories from all blogs
  const allCategories = ["all"]; // Initialize with 'all' category
  allBlogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });

  // Sort allCategories to ensure they are in alphabetical order
  allCategories.sort();

  // Step 2: Filter blogs based on the current category (params.slug)
  const blogs = allBlogs.filter((blog) => {
    if (params.slug === "all") {
      return true; // Include all blogs if 'all' category is selected
    }
    return blog.tags.some((tag) => slug(tag) === params.slug);
  });

  return (
    <article className="flex flex-col text-dark dark:text-light mb-16 sm:mb-24">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more activities and expand your experiences!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 pt-5 sm:pt-10 md:pt-24 sxl:pt-32 px-5 sm:px-10 md:px-24 sxl:px-32 border-t-2 border-solid border-dark dark:border-light">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
