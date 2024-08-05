import React, { useState } from "react";

const SidebarMenu = () => {
  // State for each menu section
  const [openSection, setOpenSection] = useState(null);

  // Toggle the visibility of a section
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <ul className="space-y-2 pl-16 pt-2">
      {/* Frontend Section */}
      <li>
        <a
          href="#"
          onClick={() => toggleSection("react")}
          className="flex items-start justify-start text-center text-sm font-extrabold  rounded-lg text-gray-400  text-white bg-[#0d0d0d] "
        >
          <span className="text-lg pt-4 pl-8 mb-4 ">Frontend</span>
        </a>
        <a
          href="#"
          onClick={() => toggleSection("react")}
          className="flex items-start justify-start text-center text-sm  rounded-lg text-gray-200  hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8 font-semibold">React</span>
        </a>
        {openSection === "react" && (
          <ul className="ml-10 mt-1.5 mb-4 text-sm  space-y-0.5">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                React with Create React App
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                React with Vite
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                React with Tailwind CSS
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                React with Redux
              </a>
            </li>
          </ul>
        )}
      </li>

      {/* Vue Section */}
      <li>
        <a
          href="#"
          onClick={() => toggleSection("vue")}
          className="flex items-start justify-start text-center text-sm  rounded-lg text-gray-200  hover:text-white hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8 font-semibold">Vue</span>
        </a>
        {openSection === "vue" && (
          <ul className="ml-10 mt-1.5 mb-4 text-sm space-y-0.5">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Vue 3 with Vite
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Vue 3 with Vue CLI
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Vue with Tailwind CSS
              </a>
            </li>
          </ul>
        )}
      </li>

      {/* Angular Section */}
      <li>
        <a
          href="#"
          onClick={() => toggleSection("angular")}
          className="flex items-start justify-start text-center text-sm  rounded-lg text-gray-200  hover:text-white hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8 font-semibold">Angular</span>
        </a>
        {openSection === "angular" && (
          <ul className="ml-10 mt-1.5 mb-4 text-sm space-y-0.5">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Angular with Angular CLI
              </a>
            </li>
          </ul>
        )}
      </li>

      {/* Svelte Section */}
      <li>
        <a
          href="#"
          onClick={() => toggleSection("svelte")}
          className="flex items-start justify-start text-center text-sm  rounded-lg text-gray-200  hover:text-white hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8 font-semibold">Svelte</span>
        </a>
        {openSection === "svelte" && (
          <ul className="ml-10 mt-1.5 mb-4 text-sm space-y-0.5">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Svelte with Vite
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                SvelteKit
              </a>
            </li>
          </ul>
        )}
      </li>

      {/* Next.js Section */}
      <li>
        <a
          href="#"
          onClick={() => toggleSection("nextjs")}
          className="flex items-start justify-start text-center text-sm  rounded-lg text-gray-200  hover:text-white hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8 font-semibold">Next.js</span>
        </a>
        {openSection === "nextjs" && (
          <ul className="ml-10 mt-1.5 mb-4 text-sm space-y-0.5">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Next.js with Tailwind CSS
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Next.js with TypeScript
              </a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default SidebarMenu;
