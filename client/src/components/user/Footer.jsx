import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 overflow-hidden">
      {/* Top Section: Three Horizontal Divs */}
      <div className="container mx-auto flex justify-between space-x-4">
        {/* First Horizontal Div */}
        <div className="w-1/3">
          <h2 className="text-lg font-bold mb-2">About Us</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec velit nec lorem convallis tincidunt.
          </p>
        </div>

        {/* Second Horizontal Div */}
        <div className="w-1/3">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="text-sm hover:underline">Home</a></li>
            <li><a href="#shop" className="text-sm hover:underline">Shop</a></li>
            <li><a href="#about" className="text-sm hover:underline">About</a></li>
            <li><a href="#contact" className="text-sm hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Third Horizontal Div */}
        <div className="w-1/3">
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#facebook" className="hover:underline">Facebook</a>
            <a href="#instagram" className="hover:underline">Instagram</a>
            <a href="#twitter" className="hover:underline">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Section: One Div with Three Vertical Divs */}
      <div className="container mx-auto mt-8">
        <div className="flex justify-between">
          {/* First Vertical Div */}
          <div className="w-1/3">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>

          {/* Second Vertical Div */}
          <div className="w-1/3">
            <h3 className="text-lg font-bold mb-2">Our Location</h3>
            <p className="text-sm">123 Street Name, City, Country</p>
          </div>

          {/* Third Vertical Div */}
          <div className="w-1/3">
            <h3 className="text-lg font-bold mb-2">Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 text-gray-800 rounded w-full mb-2"
              />
              <button className="bg-Amal-green text-white p-2 rounded w-full">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
