import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Header/Amal-01.png';
import Logo1 from '../../assets/Header/Amal-07.png';
import LogoSmall from '../../assets/Header/Amal-01.png';
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import { CiUser, CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSecondaryHeader, setShowSecondaryHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowSecondaryHeader(scrollTop > 200); // Adjust 100 to your desired scroll threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className=" w-full z-50 top-0 overflow-hidden">
      {/* First Block: Logo */}
      <div className="bg-Amal-ivory py-2 hidden md:block">
        <div className="container mx-auto flex justify-center">
          <img src={Logo} alt="Logo 1" className="h-20" />
        </div>
      </div>

      {/* Second Block: Centered Text */}
      <div className="bg-Amal-green md:bg-white py-1">
        <div className="container mx-auto text-center">
          <h1 className="text-sm md:text-md text-white md:text-Amal-green font-Agatho">
            FREE UK DELIVERY ON ORDERS OVER <span className="text-white md:text-Amal-green font-sans">£</span>100
          </h1>
        </div>
      </div>

      {/* Third Block: Logo, Navigation, and Icons */}
      <div className="bg-Amal-ivory md:bg-Amal-green-transparent  py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Side: Logo and Menu Toggle */}
          <div className="flex items-center space-x-4 md:space-x-0">
            {/* Logo for medium and larger screens */}
            <img src={Logo1} alt="Logo 1" className="hidden md:block h-10" />

            {/* Menu Toggle (for mobile view) */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiOutlineXMark className="text-3xl text-Amal-green md:text-white" />
              ) : (
                <HiBars3 className="text-3xl text-Amal-green md:text-white" />
              )}
            </button>

            {/* Search Icon for mobile */}
            <CiSearch className="text-3xl text-Amal-green md:hidden cursor-pointer" />
          </div>

          {/* Centered Logo for small screens */}
          <div className="md:hidden ml-4">
            <img src={LogoSmall} alt="Logo Small" className="w-20 mx-auto" />
          </div>

          {/* Search Icon for medium and larger screens */}
          <CiSearch className="text-3xl hidden md:block text-white cursor-pointer" />

          {/* Navigation items centered for medium and larger screens */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-4">
              <li><a href="#home" className="text-white hover:underline">Home</a></li>
              <li><a href="#new-arrivals" className="text-white hover:underline">New Arrivals</a></li>
              <li><a href="#all-abayas" className="text-white hover:underline">All Abayas</a></li>
              <li><a href="#contact-us" className="text-white hover:underline">Contact Us</a></li>
              <li><a href="#about-us" className="text-white hover:underline">About Us</a></li>
            </ul>
          </nav>

          {/* Right Side: Icons */}
          <div className="flex items-center space-x-2 mr-5">
            <CiHeart className="text-3xl text-Amal-green md:text-white cursor-pointer" />
            <CiShoppingCart className="text-3xl text-Amal-green md:text-white cursor-pointer" />
            <CiUser className="text-3xl text-Amal-green md:text-white cursor-pointer" />
          </div>
        </div>

       
      </div>
       {/* Mobile Menu */}
       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-Amal-green`}>
          <nav className="container mx-auto">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><a href="#home" className="text-white hover:underline">Home</a></li>
              <li><a href="#new-arrivals" className="text-white hover:underline">New Arrivals</a></li>
              <li><a href="#all-abayas" className="text-white hover:underline">All Abayas</a></li>
              <li><a href="#contact-us" className="text-white hover:underline">Contact Us</a></li>
              <li><a href="#about-us" className="text-white hover:underline">About Us</a></li>
            </ul>
          </nav>
        </div>
    </header>

    <header
        className={`fixed z-50 top-0 w-full bg-Amal-ivory md:bg-Amal-green  transition-transform transform ${
          showSecondaryHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
       <div className="bg-Amal-ivory md:bg-Amal-green-transparent py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
         
          <div className="flex items-center space-x-4 md:space-x-0">
         
            <img src={Logo1} alt="Logo 1" className="hidden md:block h-10" />

           
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiOutlineXMark className="text-3xl text-Amal-green md:text-white" />
              ) : (
                <HiBars3 className="text-3xl text-Amal-green md:text-white" />
              )}
            </button>

           
            <CiSearch className="text-3xl text-Amal-green md:hidden cursor-pointer" />
          </div>

         
          <div className="md:hidden ml-4">
            <img src={LogoSmall} alt="Logo Small" className="w-20 mx-auto" />
          </div>

         
          <CiSearch className="text-3xl hidden md:block text-white cursor-pointer" />

         
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-4">
              <li><a href="#home" className="text-white hover:underline">Home</a></li>
              <li><a href="#new-arrivals" className="text-white hover:underline">New Arrivals</a></li>
              <li><a href="#all-abayas" className="text-white hover:underline">All Abayas</a></li>
              <li><a href="#contact-us" className="text-white hover:underline">Contact Us</a></li>
              <li><a href="#about-us" className="text-white hover:underline">About Us</a></li>
            </ul>
          </nav>

         
          <div className="flex items-center space-x-2 mr-5">
            <CiHeart className="text-3xl text-Amal-green md:text-white cursor-pointer" />
            <CiShoppingCart className="text-3xl text-Amal-green md:text-white cursor-pointer" />
            <CiUser className="text-3xl text-Amal-green md:text-white cursor-pointer" />
          </div>
        </div>

       
       
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-Amal-green`}>
          <nav className="container mx-auto">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><a href="#home" className="text-white hover:underline">Home</a></li>
              <li><a href="#new-arrivals" className="text-white hover:underline">New Arrivals</a></li>
              <li><a href="#all-abayas" className="text-white hover:underline">All Abayas</a></li>
              <li><a href="#contact-us" className="text-white hover:underline">Contact Us</a></li>
              <li><a href="#about-us" className="text-white hover:underline">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>

    
  );
};

export default Header;
