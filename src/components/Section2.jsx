import React from "react";

const Section2 = () => {
  return (
    <div className="border-gray-900 pt-40 pb-40 flex justify-center border-t border-gray-950">
      <a  className="group relative w-full max-w-xs sm:max-w-none sm:w-1/3 block h-[25rem] sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed rounded-md border-gray-700"></span>
        <div className="relative cursor-default flex flex-col h-full items-center justify-center border-2 rounded-md border-gray-200 bg-[#111111] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 p-6 text-center text-white text-sm sm:text-base">
          <p className="mb-1.5">3 hrs to configure a new React app</p>
          <p className="mb-1.5">+ 5 hrs setting up backend endpoints</p>
          <p className="mb-1.5">+ 4 hrs integrating third-party libraries</p>
          <p className="mb-1.5">+ 2 hrs tweaking CSS for mobile</p>
          <p className="mb-1.5">+ 3 hrs configuring database schema</p>
          <p className="mb-1.5">+ 2 hrs managing user authentication</p>
          <p className="mb-1.5">+ 2 hrs dealing with deployment issues</p>
          <p className="mb-1.5">+ ∞ hrs debugging...</p>
          <h1 className="text-lg font-bold mt-8 sm:text-xl">
            There's an easier way,{" "}
            <span className="hover:text-[#007BFF] hover:text-lg sm:hover:text-xl transition-all hover:cursor-pointer">
              BoilerStack
            </span>
            !
          </h1>
        </div>
      </a>
    </div>
  );
};

export default Section2;