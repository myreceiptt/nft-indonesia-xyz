import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-16 mb-16 sm:mt-24 sm:mb-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          All We Have Done
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
      <div className="w-full flex justify-end">
        <Link
          href="/categories/all"
          className="inline-block font-bold text-dark dark:text-light hover:underline-offset-8 transition-all ease duration-300 underline underline-offset-2 text-xl md:text-2xl"
        >
          read all
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;
