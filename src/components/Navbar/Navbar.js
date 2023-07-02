import React from 'react';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img
          className="w-[150px]"
          src={logo} // Replace with your Netflix logo image path
          alt="Netflix"
        />
        <div>
          <a
            className="text-white text-base font-medium hover:text-gray-300 transition-colors duration-300"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
