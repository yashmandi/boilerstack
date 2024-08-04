import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div>
      <section className="mt-4">
        <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-[#007BFF]  rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-xs font-medium text-black">
              BoilerStack is out! See what's new
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="mb-4 cursor-default text-4xl font-extrabold tracking-tight leading-none  text-white md:text-5xl lg:text-5xl ">
            Start building in{" "}
            <span className="hover:text-[#007BFF]  transition-all cursor-default">
              seconds
            </span>
            , not hours.{" "}
          </h1>
          <p className="mb-8  font-normal text-gray-500 lg:text-md mt-2 sm:px-16 xl:px-48 dark:text-gray-400">
            Fuel your app development with instant, customizable templates.
            Choose, customize, and launch your projects swiftly and efficiently
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center text-sm items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-[#1f1f1f] bg-[#151515]  dark:focus:ring-primary-900"
            >
              Browse Boilerplates
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-gray-400 uppercase">
              OPTIMIZED FOR
            </span>
            <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-[#61DAFB] dark:hover:text-gray-400"
              >
                <FaReact 
                className="h-10 w-24"/>
              </a>
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-[#38B2AC] dark:hover:text-gray-400"
              >
                <RiTailwindCssFill 
                className="h-10 w-24"/>
              </a>
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-[#3c3c3c] dark:hover:text-gray-400"
              >
                <RiNextjsFill 
                className="h-10 w-24"/>
              </a>
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-[#F7DF1E] dark:hover:text-gray-400"
              >
                <RiJavascriptFill 
                className="h-12 w-24"/>
              </a>
              <a
                href="#"
                class="mr-5 mb-5 lg:mb-0 hover:text-[#3178C6] dark:hover:text-gray-400"
              >
                <SiTypescript 
                className="h-9 w-24"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
