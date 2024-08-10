import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BS_Logo from "../assets/BS_Logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-lg">
      <div className="flex flex-row items-center justify-between p-4">
        <div className="flex items-center pl-4 md:pl-20">
          <Link to="/" className="flex items-center text-lg font-bold text-white">
            <img src={BS_Logo} className="h-8 w-8 mr-2" alt="BoilerStack Logo" />
            BoilerStack
          </Link>
        </div>

        <div className="hidden md:flex flex-grow justify-between items-center pl-14">
          <div className="flex">
            <Link to="/docs">
              <p className="text-sm hover:text-gray-100 mr-5 cursor-pointer font-semibold p-1 text-gray-500 mt-1 transition-all">
                Docs
              </p>
            </Link>
            <Link to="/pricing">
              <p className="text-sm hover:text-gray-100 mr-5 cursor-pointer font-semibold p-1 text-gray-500 mt-1 transition-all">
                Pricing
              </p>
            </Link>
            <Link to="/about">
              <p className="text-sm hover:text-gray-100 cursor-pointer font-semibold p-1 text-gray-500 mt-1 transition-all">
                About
              </p>
            </Link>
          </div>
          <div className="flex items-center">
            <SearchBar />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center pr-4">
          <button onClick={toggleMenu} className="text-white transition-all focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#171717] rounded-md text-white w-full flex flex-col items-start p-4 space-y-4">
          <Link to="/docs" onClick={toggleMenu}>
            Docs
          </Link>
          <Link to="/pricing" onClick={toggleMenu}>
            Pricing
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          {/* <SearchBar /> */}
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;