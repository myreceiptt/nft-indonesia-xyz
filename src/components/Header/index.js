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
    <header className="w-full p-4 px-5 sm:px-10 flex flex-wrap items-center justify-between">
      <button
        className="inline-block lg:hidden z-50"
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
        className="py-3 px-6 sm:px-8 dark:bg-light/80 bg-dark/80 backdrop-blur-sm border border-solid border-dark dark:border-light rounded-lg text-light dark:text-dark font-medium capitalize items-center flex flex-col lg:hidden fixed top-6 translate-x-1/2 z-50 transition-all ease duration-300"
        style={{
          top: click ? "2rem" : "-11rem",
        }}
      >
        <div className="w-full md:w-auto">
          <ul>
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
            <li></li>
          </ul>
        </div>
        <div className="relative border-t-2 border-solid dark:border-dark border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
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
        </div>
      </nav>

      <nav className="w-max py-3 px-8 dark:bg-light/80 bg-dark/80 backdrop-blur-sm border border-solid border-dark dark:border-light rounded-lg text-light dark:text-dark font-medium capitalize items-center hidden lg:flex lg:flex-row fixed translate-x-1/2 z-50 transition-all ease duration-300">
        <div className="w-full md:w-auto">
          <ul>
            <li>
              <Link
                href="/about-us"
                className="mr-4 hover:text-dark hover:dark:text-light"
              >
                About Us
              </Link>
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
            <li></li>
          </ul>
        </div>
        <div className="relative border-t-2 border-solid dark:border-dark border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
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
        </div>

        <Link
          href="/categories/all"
          className="mx-4 hover:text-dark hover:dark:text-light"
        >
          Activities
        </Link>
        <Link
          href="/collaborate"
          className="mx-4 hover:text-dark hover:dark:text-light"
        >
          Collaborate
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-4 flex items-center justify-center rounded-full p-1",
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
      <Logo />
    </header>
  );
};

export default Header;
