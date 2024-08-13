// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-100">
      {/* First Block: Logo */}
      <div className="bg-blue-500 py-4">
        <div className="container mx-auto flex justify-center">
          <img src="path/to/your-logo1.png" alt="Logo 1" className="h-10" />
        </div>
      </div>

      {/* Second Block: Centered Text */}
      <div className="bg-gray-300 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-xl font-bold">Centered Text</h1>
        </div>
      </div>

      {/* Third Block: Logo and Navigation */}
      <div className="bg-blue-500 py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo on the left */}
          <img src="path/to/your-logo2.png" alt="Logo 2" className="h-10" />

          {/* Navigation items in the center */}
          <nav className="flex-1">
            <ul className="flex justify-center space-x-4">
              <li><a href="#home" className="text-white hover:underline">Home</a></li>
              <li><a href="#new-arrivals" className="text-white hover:underline">New Arrivals</a></li>
              <li><a href="#all-abayas" className="text-white hover:underline">All Abayas</a></li>
              <li><a href="#contact-us" className="text-white hover:underline">Contact Us</a></li>
              <li><a href="#about-us" className="text-white hover:underline">About Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
