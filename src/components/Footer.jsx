import React from "react";
import BS_Logo from "../assets/BS_Logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0d0d0d] text-white p-6 sm:p-12 sm:pt-24 border-t border-1 mt-24 border-[#171717]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h2 className="flex justify-center md:justify-start text-xl sm:text-2xl font-bold">
              <span className="mr-2">
                <img src={BS_Logo} className="h-6 w-6 sm:h-8 sm:w-8" alt="" />
              </span>
              BoilerStack
            </h2>
            <p className="text-xs sm:text-sm mt-2">
              A product by{" "}
              <a href="" className="text-blue-500 text-xs sm:text-sm hover:underline transition-all">
                BoilerStack
              </a>
            </p>
            <p className="text-xs sm:text-sm">
              Building in public at{" "}
              <a
                href="https://twitter.com/yashmandi"
                className="text-blue-500 text-xs sm:text-sm hover:underline transition-all"
              >
                @yashmandi
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row text-xs sm:text-sm font-semibold space-y-4 sm:space-y-0 text-center sm:text-left">
            <div className="sm:mr-8">
              <a
                href="/pricing"
                className="block mb-2 hover:text-gray-100 transition-all text-gray-500"
              >
                Pricing
              </a>
              <a
                href="/components"
                className="block mb-2 hover:text-gray-100 transition-all text-gray-500"
              >
                Components
              </a>
              <a
                href="/templates"
                className="block mb-2 hover:text-gray-100 transition-all text-gray-500"
              >
                Templates
              </a>
              <a
                href="/categories"
                className="block mb-2 hover:text-gray-100 transition-all text-gray-500"
              >
                Categories
              </a>
              <a
                href="/blog"
                className="block mb-2 hover:text-gray-100 transition-all text-gray-500"
              >
                Blog
              </a>
            </div>
            <div className="hidden md:block">
              <a
                href="https://twitter.com"
                className="block mb-2 hover:text-gray-100 transition-all text-gray-500"
              >
                Twitter
              </a>
              <a
                href="https://discord.com"
                className="block hover:text-gray-100 transition-all text-gray-500"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;