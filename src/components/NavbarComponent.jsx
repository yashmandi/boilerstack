import React from "react";
import SearchBar from "./SearchBar";
import BS_Logo from "../assets/BS_Logo.png";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <div className="sticky top-0 z-50 transition-all  duration-300 ease-in-out backdrop-blur-lg border-b border-gray-900">
      {/* <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-800 to-gray-300"></div> */}
      <div className="flex flex-row items-center ">
        <div className="navbar pl-20">
          <h1 className="text-lg flex  cursor-default px-2 py-1 rounded-lg hover:bg-gray-900 transition-all font-bold text-white">
            <Link to="/">
              <div className="flex items-center">
                <img src={BS_Logo} className="h-8 w-8 mr-1" alt="" />
                BoilerStack
              </div>
            </Link>
          </h1>
        </div>
        <div className="flex-grow flex justify-between items-center p-4 pl-14">
          <div className="flex">
            <Link to="/docs">
              <p className="text-sm hover:text-gray-100 mr-5 cursor-pointer font-semibold p-1  text-gray-500 mt-1 transition-all">
                Docs
              </p>
            </Link>
            <Link to="/pricing">
              <p className="text-sm hover:text-gray-100 mr-5 cursor-pointer font-semibold p-1  text-gray-500 mt-1 transition-all">
                Pricing
              </p>
            </Link>
            <Link to="/about">
              <p className="text-sm hover:text-gray-100 cursor-pointer font-semibold p-1  text-gray-500 mt-1 transition-all">
                About
              </p>
            </Link>
          </div>
          <div className="flex items-center">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
