import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-3xl font-bold tracking-wider text-red-700"
            >
            <img className="w-[120px]" src={logo} alt="logo" />
             
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <div>
                  <Link
                    to="/"
                    className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md  w-[90px]"
                  >
                    Home
                  </Link>
                </div>

                <div>
                  <Link
                    to="/tenders"
                    className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md  w-[90px]"
                  >
                    Tenders
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 text-gray-600 hover:text-white px-3 py-2 rounded-md  w-[90px]"
                  >
                    Contact
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="bg-red-700 text-lg font-medium transition-colors duration-300 text-white hover:text-white px-3 py-2 rounded-md  w-[90px]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:hidden ml-6">
              <button
                type="button"
                className="text-gray-600 hover:text-red-700 focus:outline-none"
                onClick={toggleMenu}
              >
                <img
                  src="https://www.svgrepo.com/show/12219/menu.svg"
                  alt="Toggle Menu"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden bg-red-700">
            <div className="flex justify-center space-y-2 mt-2">
              <div className="flex justify-end mx-[2px]">
                <Link
                  to="/"
                  className="mt-2 hover:bg-red-700 text-lg font-medium transition-colors duration-300 px-3 py-2 rounded-md  w-[90px] shadow-lg border-[2px]"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </div>

              <div className="flex justify-end mx-[2px]">
                <Link
                  to="/tenders"
                  className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 px-3 py-2 rounded-md  w-[90px] shadow-lg border-[2px]"
                  onClick={toggleMenu}
                >
                  Tenders
                </Link>
              </div>
              <div className="flex justify-end mx-[2px]">
                <Link
                  to="/about"
                  className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 px-3 py-2 rounded-md  w-[90px] shadow-lg border-[2px]"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </div>
              <div className="flex justify-end mx-[2px]">
                <Link
                  to="/login"
                  className="hover:bg-red-700 text-lg font-medium transition-colors duration-300 px-3 py-2 rounded-md  w-[90px] shadow-lg border-[2px] bg-red-700"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
