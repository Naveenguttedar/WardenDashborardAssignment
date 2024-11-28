"use client"; // Required for client-side rendering in Next.js
import { useState } from "react";
import { FaSearch, FaBell, FaRobot, FaBars } from "react-icons/fa";
import { PiHeadsetFill } from "react-icons/pi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white ">
      <nav className="flex items-center justify-between p-4 px-6 md:px-[4rem]">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Leads</h1>

        {/* Search Bar  */}
        <div className="flex-1 justify-start px-4 pl-8 ">
          <div className="flex flex-grow max-w-xs sm:max-w-md items-center px-2 bg-gray-200 py-3 rounded-[.9rem]">
            <FaSearch className="w-5 h-5 text-gray-600 mx-2" />
            <input
              type="text"
              placeholder="Search by name or email or room.."
              className="w-full outline-none bg-transparent text-gray-800 text-sm"
            />
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden p-2 ml-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="w-6 h-6" />
        </button>

        {/* Desktop Icons */}
        <div className="hidden sm:flex gap-4 items-center">
          <FaRobot className="w-6 h-6" />
          <PiHeadsetFill className="w-6 h-6" />
          <FaBell className="w-6 h-6" />
          <div className="w-7 h-7 flex items-center justify-center bg-green-400 text-white rounded-full uppercase">
            <span>M</span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col gap-4 px-4 py-2 bg-gray-100">
          <div className="flex justify-start gap-4">
            <FaRobot className="w-6 h-6" />
            <PiHeadsetFill className="w-6 h-6" />
            <FaBell className="w-6 h-6" />
            <div className="w-7 h-7 flex items-center justify-center bg-green-400 text-white rounded-full uppercase">
              <span>N</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
