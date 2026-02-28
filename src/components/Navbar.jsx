import React from 'react';
import { Link } from 'react-router-dom';

import NavTestominal from './NavTestominal';
const Navbar = () => {
  return (
    <div className="relative">
      <div className="pt-10">
        <NavTestominal heading={'Clients Testominals'} />
      </div>
      <header className="fixed top-0 left-0 w-full h-32 flex bg-white z-50 shadow-md">
        <div className="h-full bg-[rgba(251,187,25,0.86)] flex items-center px-3 clip-diagonal">
          <div className="w-64">
            <img
              src="https://khyberlinetransportservices.com/wp-content/uploads/2024/09/Layer-1-2-e1726424287142.png"
              alt="Logo"
              className="h-16 object-cover"
            />
          </div>
        </div>

        <nav className="flex-1">
          <div className="max-w-7xl mx-auto px-6 h-full flex justify-end items-center">
            <ul className="flex gap-8 text-black font-medium items-center pr-4 tracking-wide">
              <Link
                to="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition duration-300"
              >
                Our Services
              </Link>
              <Link
                to="/updates"
                className="hover:text-yellow-400 transition duration-300"
              >
                Our News Updates
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition duration-300"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
