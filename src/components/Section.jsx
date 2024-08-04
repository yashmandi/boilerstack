import React from "react";

const Section = () => {
  return (
    <div className="border-t  border-gray-900 pt-8 pb-8 pl-8 flex justify-center">
      <a href="#" className="group relative block w-96 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed border-gray-700"></span>
        <div className="relative flex h-full items-center justify-center border-2 border-gray-200 bg-[#0d0d0d] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          {/* Text visible on hover */}
          <div className="absolute flex items-center justify-center p-4 text-white opacity-0 transition-opacity group-hover:opacity-100 sm:p-6 lg:p-8">
            <div className="text-center">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                Go around the world
              </h3>
              <p className="mt-4 text-sm text-white sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, praesentium voluptatem omnis atque culpa repellendus.
              </p>
              <p className="mt-8 font-bold">Read more</p>
            </div>
          </div>

          {/* Content visible by default */}
          <div className="relative flex flex-col items-center justify-center p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 sm:size-12 text-white"
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
            <h2 className="mt-4 text-xl text-white font-medium sm:text-2xl">
              Hover me!
            </h2>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Section;