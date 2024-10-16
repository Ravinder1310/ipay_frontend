import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Close the profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast("Logout Successfully!", {
      duration: 4000, // Duration in milliseconds
      position: "top-center", // Position of the toast
      style: {
        background: "white",
        color: "black",
      },
      icon: "👏", // Add a custom icon
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <nav className={`${auth?.token ? "hidden" : "flex"} fixed justify-between items-center pl-2 pt-2 pb-2 pr-6 w-full bg-blue-400 z-40`}>
      {/* Logo */}
      <img
        src="/images/main_logo.png"
        onClick={() => {
          navigate("/");
        }}
        className="w-20 h-12 hover:cursor-pointer"
        alt="Logo"
      />

      {/* Hamburger Menu Button (Visible on small screens) */}
      <div className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {/* Hamburger Icon */}
        <img src="/images/menu_all.png" className="w-[50px]" alt="Menu" />
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex md:gap-20 ${
          isMenuOpen ? "block" : "hidden"
        } flex-col md:flex-row absolute md:relative top-16 md:top-0 md:right-0 md:w-auto w-[100%] right-0 bg-gray-100 md:bg-transparent z-50 rounded-lg shadow-md md:shadow-none`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 font-bold bg-blue-900 sm:bg-transparent p-4 md:p-0">
          {/* Show all links on large screens */}
          <div className="hidden md:flex md:items-center gap-10 text-black ">
            <a href="/" className="hover:text-yellow-600 hover:underline">
              Home
            </a>
            <a href="/about" className="hover:text-yellow-600 hover:underline">
              About
            </a>
            <a
              href="/services"
              className="hover:text-yellow-600 hover:underline"
            >
              Services
            </a>
            <a
              href="/contactUs"
              className="hover:text-yellow-600 hover:underline"
            >
              Contact
            </a>
            <button  onClick={() => {navigate("/login")}} className='bg-orange-400 py-2 text-white font-bold w-[100px] rounded-full hover:bg-yellow-400 '>
          Login
        </button>
        <button  onClick={() => {navigate("/signup")}} className='bg-white py-2 text-black font-bold w-[100px] rounded-full hover:bg-yellow-400'>
          Register
        </button>
          </div>
         

          {/* Show Login and SignUp links on small screens */}
          {isMenuOpen && (
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-12 w-full">
              <a
                href="/"
                className="text-white hover:underline border-2 border-white py-2 w-full"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white hover:underline border-2 border-white py-2 w-full"
              >
                About
              </a>
              <a
                href="/services"
                className="text-white hover:underline border-2 border-white py-2 w-full"
              >
                Services
              </a>
              <a
                href="/contactUs"
                className="text-white hover:underline border-2 border-white py-2 w-full"
              >
                Contact
              </a>
              {!auth?.token ? (
                <>
                  <a
                    href="/login"
                    className="text-white hover:underline border-2 border-white py-2 w-full"
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="text-white hover:underline border-2 border-white py-2 w-full"
                  >
                    Sign Up
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/"
                    className="text-white hover:underline border-2 border-white py-2 w-full"
                  >
                    My Profile
                  </a>
                </>
              )}
            </div>
          )}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-3 p-4 md:p-0 bg-blue-900 sm:bg-transparent">
          <img
            src="/images/facebook.png"
            alt="facebook"
            className="w-8 hover:cursor-pointer transition-transform transform hover:scale-110 hover:-translate-y-1"
          />
          <img
            src="/images/twitter.png"
            alt="twitter"
            className="w-8 hover:cursor-pointer transition-transform transform hover:scale-110 hover:-translate-y-1"
          />
          <img
            src="/images/linkedin.png"
            alt="linkedin"
            className="w-8 hover:cursor-pointer transition-transform transform hover:scale-110 hover:-translate-y-1"
          />
          <img
            src="/images/insta.png"
            alt="instagram"
            className="w-8 hover:cursor-pointer transition-transform transform hover:scale-110 hover:-translate-y-1"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
