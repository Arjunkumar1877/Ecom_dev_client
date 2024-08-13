import React, { useState } from 'react';
import Logo from '../../assets/Header/Amal-01.png'
import Logo1 from '../../assets/Header/Amal-07.png'
import LogoSmall from '../../assets/Header/Amal-01.png'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, HeartIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100">
      {/* First Block: Logo */}
      <div className="bg-Amal-ivory py-4 hidden md:block">
        <div className="container mx-auto flex justify-center">
          <img src={Logo} alt="Logo 1" className="h-20" />
        </div>
      </div>

      {/* Second Block: Centered Text */}
      <div className="bg-Amal-green md:bg-white py-2">
        <div className="container mx-auto text-center">
          <h1 className="text-md text-white md:text-Amal-green font-Agatho">
            FREE UK DELIVERY ON ORDERS OVER <span className='text-whitemd:text-Amal-green font-sans'>£</span>100
          </h1>
        </div>
      </div>

      {/* Third Block: Logo, Navigation, and Icons */}
      <div className="bg-Amal-ivory md:bg-Amal-green bg-opacity-80 py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left side: Logo and Menu Toggle */}
          <div className="flex items-center space-x-4 md:space-x-0">
            {/* Logo for medium and larger screens */}
            <img src={Logo1} alt="Logo 1" className="hidden md:h-10 md:block" />
            
            {/* Logo for small screens */}
           

            {/* Menu Toggle (for mobile view) */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XMarkIcon className="h-6 text-Amal-green md:text-white" /> : <Bars3Icon className="h-6 text-Amal-green md:text-white" />}
            </button>
           
          </div>
<div className='md:hidden py-3 ml-24'>
          <img src={LogoSmall} alt="Logo Small" className="md:hidden h-20 mx-auto" />

</div>

          {/* Navigation items centered */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-4">
              <li><a href="#home" className="text-white hover:underline">Home</a></li>
              <li><a href="#new-arrivals" className="text-white hover:underline">New Arrivals</a></li>
              <li><a href="#all-abayas" className="text-white hover:underline">All Abayas</a></li>
              <li><a href="#contact-us" className="text-white hover:underline">Contact Us</a></li>
              <li><a href="#about-us" className="text-white hover:underline">About Us</a></li>
            </ul>
          </nav>

          {/* Right side: Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <MagnifyingGlassIcon className="h-6 text-Amal-green md:text-white cursor-pointer" />
            
            {/* Cart Icon */}
            <ShoppingCartIcon className="h-6 text-Amal-green md:text-white cursor-pointer" />
            
            {/* User Icon */}
            <UserIcon className="h-6 text-Amal-green md:text-white cursor-pointer" />
            
            {/* Wishlist Icon */}
            <HeartIcon className="h-6 text-Amal-green md:text-white cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-amal-green`}>
          <nav className="container mx-auto">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><a href="#home" className="text-Amal-green hover:underline">Home</a></li>
              <li><a href="#new-arrivals" className="text-Amal-green hover:underline">New Arrivals</a></li>
              <li><a href="#all-abayas" className="text-Amal-green hover:underline">All Abayas</a></li>
              <li><a href="#contact-us" className="text-Amal-green hover:underline">Contact Us</a></li>
              <li><a href="#about-us" className="text-Amal-green hover:underline">About Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
