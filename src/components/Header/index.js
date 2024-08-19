"use client";
import Link from "next/link";
import Logo from "./Logo";
import { SunIcon, MoonIcon } from "../Icons";
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
    <header className="w-full p-4 px-5 sm:px-10 flex flex-wrap items-center justify-between fixed z-50 top-0 start-0 dark:bg-dark/80 bg-light/80 backdrop-blur-sm">
      <Logo />
      <button
        className="inline-block lg:hidden"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 right-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 right-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 right-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
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
        className="dark:bg-light/80 bg-dark/80 backdrop-blur-sm border border-solid border-dark dark:border-light rounded-lg text-light dark:text-dark font-medium capitalize items-center flex flex-col lg:hidden fixed z-50 transition-all ease duration-300"
        style={{
          top: click ? "5rem" : "-11rem",
        }}
      >
        <div className="">
          <ul className="">
            <li>
              <Link href="/about-us" className="mx-2">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/categories/all" className="mx-2">
                Activities
              </Link>
            </li>
            <li>
              <Link href="/collaborate" className="mx-2">
                Collaborate
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="hidden lg:flex lg:flex-row z-50">
        <Link
          href="/about-us"
          className="m-2 block py-2 px-10 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 text-dark dark:text-light font-medium capitalize items-center"
        >
          About Us
        </Link>
        <Link
          href="/categories/all"
          className="m-2 block py-2 px-10 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 text-dark dark:text-light font-medium capitalize items-center"
        >
          Activities
        </Link>
        <Link
          href="/collaborate"
          className="m-2 block py-2 px-10 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 text-dark dark:text-light font-medium capitalize items-center"
        >
          Collaborate
        </Link>
        <div className="m-2 block py-2 px-2 rounded-full hover:scale-105 transition-all ease duration-200 items-center">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-6 h-6 ease flex items-center justify-center rounded-full p-1",
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
