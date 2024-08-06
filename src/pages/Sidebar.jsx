import React, { useState } from "react";

const SidebarMenu = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <ul className="space-y-2 pl-16 pt-2 h-screen w-80 border-r">
      {/* Frontend Section */}
      <li>
        <a
          href="#"
          onClick={() => toggleSection("introduction")}
          className="flex items-start justify-start text-center  font-extrabold  rounded-lg text-gray-400  text-white bg-[#0d0d0d] "
        >
          <span className="text-lg pt-4 pl-8 mb-2">Introduction</span>
        </a>
        <a
          href="#"
          onClick={() => toggleSection("frontend")}
          className="flex items-start justify-start text-center text-sm font-extrabold  rounded-lg text-gray-400  text-white bg-[#0d0d0d] "
        >
          <span className="text-lg pt-4 pl-8 mb-2">Frontend</span>
        </a>
        <a
          href="#"
          onClick={() => toggleSection("react")}
          className="flex items-start justify-start text-center text-sm   rounded-lg text-gray-200  hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="pl-8">React</span>
        </a>
        {openSection === "react" && (
          <ul className="ml-10 mt-1.5 mb-4 text-sm space-y-0.5">
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
          className="flex items-start justify-start text-center text-sm  rounded-lg text-gray-200  hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8">Vue</span>
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
          className="flex items-start justify-start text-center text-sm  rounded-lg text-gray-200  hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8">Angular</span>
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
          className="flex items-start justify-start text-center text-sm  rounded-lg text-gray-200  hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8">Svelte</span>
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
          className="flex items-start justify-start text-center text-sm  rounded-lg text-gray-200  hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8">Next.js</span>
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

      {/* Backend Section */}
      <li>
        <a
          href="#"
          onClick={() => toggleSection("backend")}
          className="flex items-start justify-start text-center text-sm font-extrabold rounded-lg text-gray-400 text-white bg-[#0d0d0d]"
        >
          <span className="text-lg pt-4 pl-8 mb-2">Backend</span>
        </a>
        <a
          href="#"
          onClick={() => toggleSection("nodejs")}
          className="flex items-start justify-start text-center text-sm rounded-lg text-gray-200 hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="pl-8">Node.js</span>
        </a>
        {openSection === "nodejs" && (
          <ul className="ml-10 mt-1.5 mb-4 text-sm space-y-0.5">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Express with MongoDB
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Express with TypeScript
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Koa.js
              </a>
            </li>
          </ul>
        )}
      </li>

      {/* Django Section */}
      <li>
        <a
          href="#"
          onClick={() => toggleSection("django")}
          className="flex items-start justify-start text-center text-sm rounded-lg text-gray-200 hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8">Django</span>
        </a>
        {openSection === "django" && (
          <ul className="ml-10 mt-1.5 mb-4 text-sm space-y-0.5">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Django with REST framework
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Django with GraphQL
              </a>
            </li>
          </ul>
        )}
      </li>

      {/* Flask Section */}
      <li>
        <a
          href="#"
          onClick={() => toggleSection("flask")}
          className="flex items-start justify-start text-center text-sm rounded-lg text-gray-200 hover:text-white bg-[#0d0d0d] hover:underline group"
        >
          <span className="text-sm pl-8">Flask</span>
        </a>
        {openSection === "flask" && (
          <ul className="ml-10 mt-1.5 mb-4 text-sm space-y-0.5">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Flask with SQLAlchemy
              </a>
            </li>
          </ul>
        )}
      </li>

      {/* Fullstack Boilerplates Section */}
      <li>
        <a
          href="#"
          onClick={() => toggleSection("fullstack")}
          className="flex items-start justify-start text-center text-sm font-extrabold rounded-lg text-gray-400 text-white bg-[#0d0d0d]"
        >
          <span className="text-lg pt-4 pl-8 mb-2">Fullstack</span>
        </a>
        <li>
          <a
            href="#"
            onClick={() => toggleSection("fullstack")}
            className="flex items-start justify-start text-center text-sm mb-2 rounded-lg text-gray-200 hover:text-white bg-[#0d0d0d] hover:underline group"
          >
            <span className="text-sm pl-8">MERN Stack</span>
          </a>
          <a
            href="#"
            onClick={() => toggleSection("fullstack")}
            className="flex items-start justify-start text-center text-sm mb-2 rounded-lg text-gray-200 hover:text-white bg-[#0d0d0d] hover:underline group"
          >
            <span className="text-sm pl-8">MEVN Stack</span>
          </a>
          <a
            href="#"
            onClick={() => toggleSection("fullstack")}
            className="flex items-start justify-start text-center text-sm rounded-lg text-gray-200 hover:text-white bg-[#0d0d0d] hover:underline group"
          >
            <span className="text-sm pl-8">MEAN Stack</span>
          </a>
        </li>
      </li>

      {/* Mobile Boilerplates Section */}
      {/* <li>
        <a
          href="#"
          onClick={() => toggleSection("mobile")}
          className="flex items-start justify-start text-center text-sm font-extrabold rounded-lg text-gray-400 text-white bg-[#0d0d0d]"
        >
          <span className="text-lg pt-4 pl-8 mb-2">Mobile</span>
        </a>
        {openSection === "mobile" && (
          <ul className="ml-10 mt-1.5 mb-4 text-sm space-y-0.5">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                React Native
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Flutter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Ionic
              </a>
            </li>
          </ul>
        )}
      </li> */}
    </ul>
  );
};

export default SidebarMenu;