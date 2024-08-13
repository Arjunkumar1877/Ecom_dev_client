import React from "react";
import landingPageImage1 from "../../assets/Landing/landingPage1.jpeg";
import landingPageImage2 from "../../assets/Landing/landingPage2.jpeg";
import landingPageImage3 from "../../assets/Landing/landingPage3.jpeg";
import landingPageImage4 from "../../assets/Landing/landingPage4.jpeg";
import landingPageImage5 from "../../assets/Landing/landingPage5.jpeg";
import landingPageImage6 from "../../assets/Landing/landingPage6.jpeg";
import landingPageImage7 from "../../assets/Landing/landingPage7.jpeg";
import landingPageImage8 from "../../assets/Landing/landingPage8.jpeg";
import landingPageImage9 from "../../assets/Landing/landingPage9.jpeg";
import logo from "../../assets/Landing/logo.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-full font-Agatho">
      {/* Hero Section */}
      <div
        className="flex h-[700px] sm:h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${landingPageImage1})` }}
      >
        <div className="flex flex-col gap-4 mt-36 justify-center items-center w-full text-white px-4 sm:px-8 lg:px-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            ELEGANT FLORAL ABAYA
          </h1>
          <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl text-center">
            TIMELESS BEAUTY ON EVERY THREAD
          </h4>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl cursor-pointer hover:underline">
            SHOP NOW
          </h3>
        </div>
      </div>

      {/* Collections Section */}
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 py-4 px-4">
          <h3 className="text-Amal-green text-xs sm:text-sm md:text-lg lg:text-xl uppercase text-center py-5 lg:py-10">
            Discover your perfect style with Amal. Elevate your wardrobe with
            our premium abayas
          </h3>
          <h1 className="text-Amal-green text-lg sm:text-xl md:text-3xl lg:text-4xl text-center">
            SHOP BY COLLECTIONS
          </h1>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-8 lg:px-16">
          {[landingPageImage2, landingPageImage3, landingPageImage2].map(
            (image, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 justify-end items-center p-4 h-[500px] bg-cover bg-center bg-no-repeat text-white"
                style={{ backgroundImage: `url(${image})` }}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  LOREM IPSUM DOLOR
                </h2>
                <button className="bg-Amal-green text-white px-5 py-1 mt-4 hover:bg-Amal-darkgreen transition-colors">
                  VIEW
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex flex-col w-full px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col justify-center items-center gap-4 lg:h-[500px] bg-Amal-lightGreen">
          <div className="flex flex-col h-full w-full p-5">
            <div className="flex flex-col relative justify-center items-center  bg-cover bg-center bg-no-repeat h-1/2 sm:h-3/4 md:h-full border border-3 ">
              <img src={logo} alt="" className="w-[500px] absolute top-0" />
              <div className="flex flex-col mt-12 gap-4 p-5 text-center rounded-lg z-20 ">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl uppercase">
                  Explore our latest collections
                </h1>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-700">
                  Discover the newest trends and timeless pieces that will
                  elevate your style.
                </p>
                <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl cursor-pointer hover:underline">
                  FIND OUT MORE
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featured collections */}

      <div className="flex flex-col w-full px-4 sm:px-8 lg:px-16 pb-6">
        <div className="flex justify-center items-center">
          <h1 className="text-Amal-lightGreen text-lg md:text-3xl lg:text-5xl py-5">
            OUR FEATURED ABAYAS
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            landingPageImage5,
            landingPageImage3,
            landingPageImage6,
            landingPageImage7,
            landingPageImage8,
          ].map((image, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex flex-col relative">
                <img
                  src={image}
                  alt={`Featured Abaya ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                />
                <button className="bg-Amal-lightGreen bottom-4 left-1/2 transform -translate-x-1/2 px-12 py-2 text-white absolute hover:bg-Amal-green">
                  VIEW
                </button>
              </div>
              <div className="flex py-2 flex-col justify-center items-center">
                <p className="text-sm sm:text-md md:text-lg">
                  Criss Cross Hija Undercap
                </p>
                <p className="text-red-500 text-sm sm:text-md md:text-lg">
                  £55.00 <s className="text-black">£65.00</s>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 text-Amal-lightGreen">
        <FaChevronLeft />
        <div className="flex justify-center items-center p-6 w-5 h-5 rounded-full bg-Amal-lightGreen ">
          <p>1</p>
        </div>

        <div className="flex justify-center items-center p-6 w-5 h-5 rounded-full border-2">
          <p>1</p>
        </div>

        <div className="flex justify-center items-center p-6 w-5 h-5 rounded-full border-2 ">
          <p>1</p>
        </div>

        <div className="flex justify-center items-center p-6 w-5 h-5 rounded-full border-2">
          <p>1</p>
        </div>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default LandingPage;
