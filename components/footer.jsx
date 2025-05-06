import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
 
        <div>
          <h2 className="text-2xl font-bold mb-4">DreamEstate</h2>
          <p className="text-gray-400 text-sm">
            Building dreams with premium properties. Find your perfect home with us.
          </p>
        </div>

 
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Properties</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

 
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Buying</a></li>
            <li><a href="#" className="hover:text-white">Selling</a></li>
            <li><a href="#" className="hover:text-white">Renting</a></li>
            <li><a href="#" className="hover:text-white">Property Management</a></li>
          </ul>
        </div>

 
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: info@dreamestate.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 (234) 567-890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">🌐</a>
            <a href="#" className="text-gray-400 hover:text-white">📘</a>
            <a href="#" className="text-gray-400 hover:text-white">📸</a>
          </div>
        </div>
      </div>

 
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DreamEstate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
