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
import Image from "next/image";
import logoDark from "../../../public/logo-nft-indonesia-light.png";
import logoLight from "../../../public/logo-nft-indonesia-dark.png";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    }).then(async (response) => {
      let json = await response.json();
      if (json.success) {
        // React.useState(true);
        // React.useState(json.message);
        // e.target.reset();
        reset();
      } else {
        // React.useState(false);
        // React.useState(json.message);
        console.log(error);
      }
    });
    // .catch((error) => {
    // React.useState(false);
    // React.useState(
    //   "Client Error. Please check the console.log for more info"
    // );
    // console.log(error);
    // });
  };

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-light m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <div className="hidden dark:flex items-center mt-16">
        <Image
          src={logoLight}
          alt="Logo NFT Indonesia"
          title="NFT Indonesia - Decentrally Independence"
          className="object-contain object-center"
          sizes="20vw"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="flex dark:hidden items-center mt-16">
        <Image
          src={logoDark}
          alt="Logo NFT Indonesia"
          title="NFT Indonesia - Decentrally Independence"
          className="object-contain object-center"
          sizes="20vw"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <h3 className="mt-4 font-bold text-center capitalize text-l xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4">
        Never Ending Activities & Updates
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
        Subscribe to stay up to date with our latest activities. Join to be one
        of the 281,603,800 Indonesians, who always follow and learn the latest
        updates.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark py-3 px-8 sm:px-10 md:px-12 rounded-full mx-4"
      >
        <input
          type="hidden"
          value={process.env.NEXT_PUBLIC_FORM_CONTACT_API}
          {...register("access_key")}
        />
        <input
          type="hidden"
          value="SubSubscription on NFTIndonesia.XYZ"
          {...register("subject")}
        />
        <input
          type="hidden"
          value="NFTIndonesia.XYZ"
          {...register("from_name")}
        />
        <input
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        />
        <input
          type="email"
          placeholder="Your email address..."
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark dark:text-light focus:border-dark dark:focus:border-light focus:ring-0 border-0 border-b-2 mr-2 pb-1 text-xs xs:text-base"
        />
        <input
          type="hidden"
          value="There is another new email address subscribed to NFTIndonesia.XYZ, congrats! Please save the email address above to your newsletter email list record."
          {...register("message")}
        />
        <button
          className="bg-dark text-light dark:text-dark dark:bg-light hover:bg-gray hover:text-dark dark:hover:bg-gray dark:hover:text-light duration-300 cursor-pointer font-medium rounded-full px-4 xs:px-8 py-1"
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
      <div className="w-full mt-16 md:mt-24 relative font-medium border-t-2 border-solid dark:border-dark border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between text-xs lg:text-base">
        <div className="text-center">
          &copy; Since 2021{" "}
          <Link
            href="/"
            className="font-bold hover:underline-offset-8 transition-all ease duration-300 underline underline-offset-2"
          >
            NFT Indonesia
          </Link>
          .
        </div>
        <div className="text-center">
          All rights reserved{" "}
          <Link
            href="/sitemap.xml"
            className="font-bold hover:underline-offset-8 transition-all ease duration-300 underline underline-offset-2"
            target="_blank"
          >
            decentrally
          </Link>
          .
        </div>
        <div className="text-center">
          Fueled by{" "}
          <Link
            href="https://x.com/zortan_"
            className="capitalize font-bold hover:underline-offset-8 transition-all ease duration-300 underline underline-offset-2"
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
