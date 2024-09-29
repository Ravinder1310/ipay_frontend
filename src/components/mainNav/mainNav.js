import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='flex justify-between items-center border-2 pl-6 pt-2 pb-2 pr-10 fixed top-0 w-full bg-white z-50'>
      {/* Logo */}
      <img src='/images/main_logo.png' onClick={() => {navigate("/")}} className='w-10 hover:cursor-pointer' alt='Logo' />

      {/* Hamburger Menu Button (Visible on small screens) */}
      <div className='md:hidden'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='focus:outline-none'
        >
          {/* Hamburger Icon */}
          <svg
            className='w-6 h-6 text-black'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex md:gap-20 ${isMenuOpen ? 'block' : 'hidden'} flex-col md:flex-row absolute md:relative top-14 right-0 md:top-0 md:right-0 md:w-auto w-full bg-gray-100 md:bg-transparent shadow-md md:shadow-none`}
      >
        <div className='flex flex-col md:flex-row items-center gap-6 md:gap-12 font-bold p-4 md:p-0'>
          <a href='/' className='hover:text-yellow-600 hover:underline'>
            Home
          </a>
          <a href='/about' className='hover:text-yellow-600 hover:underline'>
            About
          </a>
          <a href='/services' className='hover:text-yellow-600 hover:underline'>
            Services
          </a>
          <a href='/contactUs' className='hover:text-yellow-600 hover:underline'>
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className='flex justify-center md:justify-start gap-3 p-4 md:p-0'>
          <img
            src='/images/facebook.png'
            alt='facebook'
            className='w-8 hover:cursor-pointer transition-transform transform hover:scale-110 hover:-translate-y-1'
          />
          <img
            src='/images/twitter.png'
            alt='twitter'
            className='w-8 hover:cursor-pointer transition-transform transform hover:scale-110 hover:-translate-y-1'
          />
          <img
            src='/images/linkedin.png'
            alt='linkedin'
            className='w-8 hover:cursor-pointer transition-transform transform hover:scale-110 hover:-translate-y-1'
          />
          <img
            src='/images/insta.png'
            alt='instagram'
            className='w-8 hover:cursor-pointer transition-transform transform hover:scale-110 hover:-translate-y-1'
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
