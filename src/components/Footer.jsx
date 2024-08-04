import React from "react";
import BS_Logo from "../assets/BS_Logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0d0d0d] text-white p-12 pt-24 border-t border-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="flex text-2xl font-bold">
              <span className="mr-1 ">
                <img src={BS_Logo} className="h-8 w-8" alt="" />
              </span>
              BoilerStack
            </h2>
            <p className="text-sm mt-2">
              A product by{" "}
              <a href="" className="text-blue-800 text-sm hover:underline">
                BoilerStack
              </a>
            </p>
            <p className="text-sm">
              Building in public at{" "}
              <a
                href="https://twitter.com/yashmandi"
                className="text-blue-800 text-sm hover:underline"
              >
                @yashmandi
              </a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row text-center md:text-left">
            <div className="mr-8 text-sm font-semibold ">
              <a
                href="/pricing"
                className="block mb-2 hover:text-gray-100 text-gray-500"
              >
                Pricing
              </a>
              <a
                href="/components"
                className="block mb-2 hover:text-gray-100 text-gray-500"
              >
                Components
              </a>
              <a
                href="/templates"
                className="block mb-2 hover:text-gray-100 text-gray-500"
              >
                Templates
              </a>
              <a
                href="/categories"
                className="block mb-2 hover:text-gray-100 text-gray-500"
              >
                Categories
              </a>
              <a
                href="/blog"
                className="block mb-2 hover:text-gray-100 text-gray-500"
              >
                Blog
              </a>
            </div>
            <div className="text-sm font-semibold">
              <a
                href="https://twitter.com"
                className="block mb-2 hover:text-gray-100 text-gray-500"
              >
                Twitter
              </a>
              <a
                href="https://discord.com"
                className="block hover:text-gray-100 text-gray-500"
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
