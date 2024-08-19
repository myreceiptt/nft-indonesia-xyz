import RiSoll from "@/src/components/Elements/RiSoll";
import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import { allBlogs } from "@/.contentlayer/generated";
import Categories from "@/src/components/Blog/Categories";
import { slug } from "github-slugger";
import Link from "next/link";

export const metadata = {
  title: "About NFT Indoneisa",
  description: `What is NFT Indonesia? What They Want? What They Do? What They Have? Who Are Their Team?`,
};

export default function AboutUs({ params }) {
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

  // export default function AboutUs() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <RiSoll />
        <AboutCoverSection />
        <article className="w-full flex flex-col text-dark dark:text-light mb-16 sm:mb-24">
          <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
            <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
              Our Activities
            </h1>
            <span className="mt-2 inline-block">
              We enjoyed our various activities, including...
            </span>
          </div>
          <Categories categories={allCategories} currentSlug={params.slug} />
          <div className="px-5 sm:px-10 md:px-24 sxl:px-32 border-b-2 border-solid border-dark dark:border-light">
            <span className="mt-2 inline-block mb-6">
              Want to collaborate? Reach us{" "}
              <Link
                href="/collaborate"
                className="!underline underline-offset-2 hover:underline-offset-8 transition-all ease duration-300"
              >
                here
              </Link>{" "}
              and let us be your partner.
            </span>
          </div>
        </article>
      </main>
    </>
  );
}
