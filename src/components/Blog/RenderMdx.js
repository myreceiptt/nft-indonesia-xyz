"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import VideoSource from "./VideoSource";
import YouTube from "./YouTube";
import AudioSource from "./AudioSource";
import CustomLink from "./CustomLink";

const mdxComponents = {
  Image,
  VideoSource,
  YouTube,
  AudioSource,
  a: CustomLink,
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-dark/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-dark prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-dark dark:prose-invert dark:prose-blockquote:border-light dark:prose-blockquote:bg-light/20 dark:prose-li:marker:text-light first-letter:text-3xl sm:first-letter:text-5xl">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
