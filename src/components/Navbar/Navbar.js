import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "../commen/DarkMode/DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-50">
      <div className="max-w-8xl mx-auto  md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <span className="font-semibold text-xl">Rick and Morty</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-4">
              <DarkMode />
              <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to="/">Home</Link>
              </button>
              <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to="/characters/page/1">Characters</Link>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-800 border-t-2">
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <div className="flex flex-col items-center gap-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/characters/page/1"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={toggleMenu}
                >
                  Characters
                </Link>
                <DarkMode />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
