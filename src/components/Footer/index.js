"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
  FarcasterIcon,
  ThehugxyzIcon,
} from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-light m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Never Ending Activities & Updates
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-medium text-sm sm:text-base">
        Subscribe to stay up to date with our latest activities. Join to be one
        of the 281,603,800 Indonesians, who always follow and learn the latest
        updates.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark dark:text-light focus:border-dark dark:focus:border-light focus:ring-0 border-0 border-b-2 mr-2 pb-1"
        />
        <button
          className="bg-dark text-light dark:text-dark dark:bg-light hover:bg-gray dark:hover:bg-gray dark:hover:text-light duration-300 cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Reach us via Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.instagram}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Reach us via Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.discord}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Chill with us on Discord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.farcaster}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Reach us via Farcaster"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FarcasterIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.thehugxyz}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Join our collective on TheHug.XYZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ThehugxyzIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t-2 border-solid dark:border-dark border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <div className="text-center">
          &copy; Since 2021{" "}
          <Link href="/" className="font-bold hover:text-purple-500">
            NFT Indonesia
          </Link>
          .
        </div>
        <div className="text-center">
          All rights reserved{" "}
          <Link href="/sitemap.xml" className="font-bold hover:text-purple-500">
            decentrally
          </Link>
          .
        </div>
        <div className="text-center">
          Fueled by{" "}
          <Link
            href="https://x.com/zortan_"
            className="capitalize font-bold hover:text-purple-500"
            target="_blank"
          >
            ZORTAN
          </Link>
          's &hearts; for you.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
