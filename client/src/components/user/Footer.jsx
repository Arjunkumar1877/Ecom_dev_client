import React from 'react';
import { FaInstagram, FaTiktok, FaPinterestP } from "react-icons/fa6";
import Logo from '../../assets/Footer/Amal-01.png'
import visa from '../../assets/Footer/visa.png'
import mastercard from '../../assets/Footer/master_card.png'
import maestro from '../../assets/Footer/maestro.png'
import american_express from '../../assets/Footer/american_express.png'
import gpay from '../../assets/Footer/google_pay.png'
import apay from '../../assets/Footer/apple_pay.png'

const Footer = () => {
    return (
        <footer className="bg-Amal-ivory text-white py-8 overflow-hidden">
            {/* Top Section: Three Horizontal Divs */}
            <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-4 md:space-y-0">
                {/* First Horizontal Div */}
                <div className="w-full md:w-1/3 px-5 my-5">
                    <h3 className="text-xl font-bold mb-2 text-black">Sign up to our Newsletter</h3>
                    <h6 className="text-md font-semibold mb-2 text-black">Get timely updates from your favorite products.</h6>
                    <form>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 text-gray-800 rounded w-full mb-2"
                        />
                        <button className="bg-Amal-green text-white p-2 rounded w-full">Subscribe</button>
                    </form>
                </div>

                {/* Second Horizontal Div */}
                <div className="w-full md:w-1/3 px-5 ml-5 flex flex-row justify-center text-Amal-green font-semibold">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <ul className="space-y-2 ">
                            <li><a href="#about" className="text-sm hover:underline">About Us</a></li>
                            <li><a href="#terms" className="text-sm hover:underline">Terms & Condition</a></li>
                            <li><a href="#privacy" className="text-sm hover:underline">Privacy Policy</a></li>
                            <li><a href="#contact" className="text-sm hover:underline">Contact Us</a></li>
                            <li><a href="#faq" className="text-sm hover:underline">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ul className="space-y-2 ">
                            <li><a href="#paymnet-methods" className="text-sm hover:underline">Payment Methods</a></li>
                            <li><a href="#voucher" className="text-sm hover:underline">Voucher Information</a></li>
                            <li><a href="#return" className="text-sm hover:underline">Return Policy</a></li>
                            <li><a href="#contact" className="text-sm hover:underline">Track Order</a></li>
                        </ul>
                    </div>
                </div>


                {/* Third Horizontal Div */}
                <div className="w-full md:w-1/3 hidden md:flex justify-center items-center">
                    <img src={Logo} alt="Amal Logo" className='w-72' />
                </div>

            </div>


            {/* Bottom Section: One Div with Three Vertical Divs */}
            <div className="container mx-auto mt-8 flex justify-center">
                <div className="flex flex-col w-full justify-center space-y-6">
                    {/* First Vertical Div */}
                    <div className="w-full gap-3 justify-center text-center flex">
                        <img src={visa} alt="" className='h-10' />
                        <img src={mastercard} alt="" className='h-10' />
                        <img src={maestro} alt="" className='h-10' />
                        <img src={american_express} alt="" className='h-10' />
                        <img src={gpay} alt="" className='h-10' />
                        <img src={apay} alt="" className='h-10' />
                    </div>

                    {/* Second Vertical Div */}
                    <div className="w-full gap-3 justify-center text-center flex text-Amal-green">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="h-10" />
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className='h-10' />

                        </a>
                        <a href="https://www.pintrest.com" target="_blank" rel="noopener noreferrer">
                            <FaPinterestP className='h-10' />

                        </a>
                    </div>


                    {/* Third Vertical Div */}
                    <div className="w-full text-center text-Amal-green font-semibold">

                        <p className="text-sm">
                            2024 © Amal
                        </p>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
