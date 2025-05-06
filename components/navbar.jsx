"use client"
import { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-50 fixed w-full  py-4 px-6 flex items-center justify-between">
  
      <Link href="/" className="flex items-center">
        <div className="text-blue-700 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-semibold text-gray-800">DreamEstate</span>
      </Link>

     
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="font-medium text-gray-900">Home</Link>
        <Link href="/about" className="font-medium text-gray-500 hover:text-gray-900">About Us</Link>
        <Link href="/properties" className="font-medium text-gray-500 hover:text-gray-900">Properties</Link>
        <Link href="/agents" className="font-medium text-gray-500 hover:text-gray-900">Agents</Link>
      </div>
 
      <div className="hidden md:block">
        <button className="border border-gray-500 rounded px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
          Find A House
        </button>
      </div>

 
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

 
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-10 border-b shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="font-medium text-gray-900 py-2">Home</Link>
            <Link href="/about" className="font-medium text-gray-700 py-2">About Us</Link>
            <Link href="/properties" className="font-medium text-gray-700 py-2">Properties</Link>
            <Link href="/agents" className="font-medium text-gray-700 py-2">Agents</Link>
            <button className="border border-gray-500 rounded px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors mt-2">
              Find A House
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;