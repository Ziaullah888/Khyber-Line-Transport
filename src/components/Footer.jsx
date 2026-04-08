import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-30  text-gray-300">
      <div className="max-w-8xl bg-[#212529] mx-auto pt-20 min-h-[130px] px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-medium space-y-4 ml-4">
          <h4 className="text-white text-lg font-semibold mb-4">About Us</h4>
          <p className="mb-9 mt-9 text-gray-400">
            Let's know about our company in details
          </p>

          <p className=" text-gray-400">
            Phone:{' '}
            <a
              href="tel:+971559076494"
              className="hover:text-yellow-400 transition"
            >
              +971 55 907 6494
            </a>
          </p>

          <p className=" text-gray-400">
            Email:{' '}
            <a
              href="mailto:musakaleem81@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              musakaleem81@gmail.com
            </a>
          </p>

          <p className=" text-gray-400">
            Musaffah M-17, Abu Dhabi, United Arab Emirates
          </p>
        </div>

        <div className="pl-14 text-medium ">
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="/" className="hover:text-yellow-400 transition ">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400 transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-yellow-400 transition">
                Our Blogs
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-white text-lg font-semibold mb-4">Subscribe</h4>

          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-red-600 text-white font-medium py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
            <p className="text-gray-400 text-medium pt-5">
              Our expertise, as well as our passion for web design, sets us
              agenciese
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-yellow-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </form>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-8">
            Our Location
          </h4>
          <div className="w-full h-64 rounded-xl  overflow-hidden shadow-lg border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7269.038524116497!2d54.48168008727815!3d24.363233336486765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40fcf06c84c1%3A0x4d5c65ec02843da0!2sMusaffah%20-%20M17%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1771055607789!5m2!1sen!2s"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-black border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © 2024 Khyber Line Transport Services. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
