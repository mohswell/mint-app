import React, { useState } from 'react';
import image from '../assets/mint-app-logo.svg'; // Ensure you have the correct path

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between font-kanit text-black dark:text-black h-16 px-6 w-full bg-white fixed top-1 inset-x-0 z-50">
      {/* Mobile Menu Button */}
      <button
        className="block sm:hidden text-black dark:text-black focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Left side: Logo and App Title */}
      <div className="flex items-center">
        <img src={image} alt="App Logo" className="w-12 h-auto mr-4" />
        <span className="text-xl font-semibold">Mint</span>
      </div>

      {/* Center: Navigation items */}
      <ul
        className={`flex ${isOpen ? 'flex' : 'hidden'} sm:flex sm:space-x-12 text-lg space-y-6 sm:space-y-0`}
      >
        <li className="cursor-pointer hover:text-gray-500">Home</li>
        <li className="cursor-pointer hover:text-gray-500">Artists</li>
        <li className="cursor-pointer hover:text-gray-500">Songs</li>
        <li className="cursor-pointer hover:text-gray-500">Profile</li>
      </ul>

      {/* Right side: Logout button */}
      <div>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
}
