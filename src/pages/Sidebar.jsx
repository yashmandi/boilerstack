"use client";
import React from "react";
const SidebarComponent = () => {
  return (
    <div className="mt-24">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-3 px-2 h-full mt-16  bg-[#0d0d0d ">
          <ul className="space-y-2">
            <li>
            <a
                href="#"
                className="flex items-start justify-start text-center mt-2 mb-4 text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 text-white :text-whitebg-[#0d0d0d] group"
              >
                <span className="text-sm pl-8 cursor-default font-semibold">Frontend</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-start justify-start text-center text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm pl-8 font-semibold">React</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify- text-center text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm pl-8 font-semibold">Vue</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify- text-center text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm pl-8 font-semibold">Angular</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify- text-center text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm pl-8 font-semibold">Svelte</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify- text-center text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm pl-8 font-semibold">Next.js</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify- text-center text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm pl-8 font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify- text-center text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm pl-8 font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify- text-center text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm pl-8 font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify- text-center text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm pl-8 font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify- text-center text-sm font-bold  rounded-lg text-gray-400 hovertext-gray-400 hover:text-white :text-whitebg-[#0d0d0d] hover:underline group"
              >
                <span className="text-sm pl-8 font-semibold">Overview</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarComponent;
