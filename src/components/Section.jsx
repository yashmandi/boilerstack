import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="border-gray-900 pt-40 pb-24 flex justify-center">
      <a className="group relative w-full max-w-xs sm:max-w-none sm:w-4/5 block h-64 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed rounded-md border-gray-700"></span>
        <div className="relative cursor-default flex h-full items-center justify-center border-2 rounded-md border-gray-200 bg-[#111111] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          {/* Text visible on hover */}
          <div className="absolute flex items-center rounded-md justify-center p-4 text-white opacity-0 transition-opacity group-hover:opacity-100 sm:p-6 lg:p-8">
            <div className="text-center">
              <h3 className="mt-4 text-lg font-bold sm:text-2xl">
                Why BoilerStack?
              </h3>
              <p className="mt-4 text-sm sm:text-md sm:w-[80%] sm:ml-24 sm:pl-28 sm:pr-20 font-normal text-white">
                Because who has time to start coding from scratch? Instantly
                generate the perfect templates for your project, so you can
                pretend you did all the hard work.
              </p>
              <div className="mt-6 w-28 inline-flex justify-center text-sm items-center py-2 px-2 sm:w-32 sm:mt-10 sm:py-3 text-base font-medium text-center rounded-lg bg-primary-700 text-gray-500 hover:text-white transition-all cursor-pointer hover:bg-[#1f1f1f] bg-[#151515] dark:focus:ring-primary-900">
                <Link to="/docs">Take me there!</Link>
              </div>
            </div>
          </div>

          {/* Content visible by default */}
          <div className="relative flex flex-col items-center justify-center p-2 sm:p-6 lg:p-8 transition-opacity group-hover:absolute group-hover:opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 sm:w-10 sm:h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="mt-2 text-lg text-white font-bold sm:mt-4 sm:text-2xl">
              Why BoilerStack?{" "}
            </h2>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Section;
