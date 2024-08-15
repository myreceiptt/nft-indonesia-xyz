"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  SunIcon,
  MoonIcon,
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
  FarcasterIcon,
  ThehugxyzIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/about" className="mr-2">
          About Us
        </Link>
        <Link href="/#" className="mx-2">
          Activities
        </Link>
        <Link href="/contact" className="mx-2">
          Collaborate
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav
        className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/about" className="mr-2">
          About Us
        </Link>
        <Link href="/#" className="mx-2">
          Activities
        </Link>
        <Link href="/contact" className="mx-2">
          Collaborate
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className=" hidden sm:flex items-center">
        <a
          href={siteMetadata.twitter}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach us via Twitter - X"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetadata.instagram}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach us via Instagram"
          target="_blank"
        >
          <InstagramIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetadata.discord}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Chill with us on Discord"
          target="_blank"
        >
          <DiscordIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetadata.farcaster}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach us vis Farcaster"
          target="_blank"
        >
          <FarcasterIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetadata.thehugxyz}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Join our collectiove on TheHug.XYZ"
          target="_blank"
        >
          <ThehugxyzIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
      </div>
    </header>
  );
};

export default Header;
