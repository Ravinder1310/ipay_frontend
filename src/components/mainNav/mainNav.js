import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='flex justify-between items-center pl-2 pt-2 pb-2 pr-6 fixed top-0 w-full bg-blue-800 z-50'>
      {/* Logo */}
      <img src='/images/main_logo.png' onClick={() => { navigate("/") }} className='w-10 hover:cursor-pointer' alt='Logo' />

      {/* Hamburger Menu Button (Visible on small screens) */}
      <div className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Hamburger Icon */}
          <img src='/images/menu_all.png' className='w-[50px]' alt='error'/>
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex md:gap-20 ${isMenuOpen ? 'block' : 'hidden'} flex-col md:flex-row absolute md:relative top-16 md:top-0 md:right-0 md:w-auto w-[55%] right-4 bg-gray-100 md:bg-transparent rounded-lg shadow-md md:shadow-none`}
      >
        <div className='flex flex-col md:flex-row items-center gap-6 md:gap-12 font-bold bg-yellow-200 sm:bg-transparent p-4 md:p-0 rounded-lg'>
          {/* Show all links on large screens */}
          <div className='hidden md:flex gap-10 text-white '>
            <a href='/' className='hover:text-yellow-600 hover:underline'>Home</a>
            <a href='/about' className='hover:text-yellow-600 hover:underline'>About</a>
            <a href='/services' className='hover:text-yellow-600 hover:underline'>Services</a>
            <a href='/contactUs' className='hover:text-yellow-600 hover:underline'>Contact</a>
          </div>

          {/* Show Login and SignUp links on small screens */}
          {isMenuOpen && (
            <div className='flex flex-col md:flex-row gap-y-2 md:gap-12 w-full'>
              <a href='/' className='hover:text-yellow-600 hover:underline border-2 border-yellow-500 py-2 w-full'>Home</a>
            <a href='/about' className='hover:text-yellow-600 hover:underline border-2 border-yellow-500 py-2 w-full'>About</a>
            <a href='/services' className='hover:text-yellow-600 hover:underline border-2 border-yellow-500 py-2 w-full'>Services</a>
            <a href='/contactUs' className='hover:text-yellow-600 hover:underline border-2 border-yellow-500 py-2 w-full'>Contact</a>
              <a href='/login' className='hover:text-yellow-600 hover:underline border-2 border-yellow-500 py-2 w-full'>Login</a>
              <a href='/signup' className='hover:text-yellow-600 hover:underline border-2 border-yellow-500 py-2 w-full'>Sign Up</a>
            </div>
          )}
        </div>

        {/* Social Media Icons */}
        <div className='flex justify-center md:justify-start gap-3 p-4 md:p-0 bg-yellow-200 sm:bg-transparent rounded-lg'>
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
