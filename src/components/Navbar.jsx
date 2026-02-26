import React from "react";
import { Link } from "react-router-dom";

import NavTestominal from "./NavTestominal";
const Navbar = () => {
 
  return (
    <div>
 <div className="pt-[50px]">
        <NavTestominal heading={"Clients Testominals"}/>
      </div>
    <header className="fixed top-0 left-0 w-full h-35 flex bg-white z-50 shadow-md">
      
      
      <div className="h-full bg-yellow-500 flex items-center px-3">
        <div className="w-60">
          <img
            src="https://khyberlinetransportservices.com/wp-content/uploads/2024/09/Layer-1-2-e1726424287142.png"
            alt="Logo"
            className="h-14 object-contain"
          />
        </div>
      </div>

      <nav className="flex-1">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-end items-center">
          <ul className="flex gap-9 text-black font-medium items-center">
            <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition duration-300">About-Us</Link>
            <Link to="/services" className="hover:text-yellow-400 transition duration-300">Our-Services</Link>
            <Link to="/updates" className="hover:text-yellow-400 transition duration-300">Our-New-Updates</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition duration-300">Contact-Us</Link>
          </ul>
        </div>
      </nav>
   
 

    

    </header>
    </div>
  );
};

export default Navbar;
