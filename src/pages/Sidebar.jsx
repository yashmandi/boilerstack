"use client";
import React from "react";
const SidebarComponent = () => {
  return (
    <div className="mt-24">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-400 hovertext-gray-400 hover:text-white :text-whiterounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hovertext-gray-400 hover:text-white :text-whitehover:bg-gray-700 focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full  mt-16  border-gray-900 bg-[#0d0d0d] shadow-md shadow-gray-900">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Frontend</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-center p-2 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm font-semibold">Overview</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarComponent;
