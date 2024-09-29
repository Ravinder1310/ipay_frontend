import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Address Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Address</h3>
            <p>Kunj, Ganga Bihar Colony, Etawah - 206001</p>
            <p>info@ipaysolutions.com</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Mobile Prepaid Recharge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Mobile Postpaid Recharge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  DTH Recharge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Fastag Recharge
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contactUs" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Our Services
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cancellation & Refunds Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center md:text-left">
          <p className="text-sm text-gray-500">
            © Ipay Solutions Pvt Ltd, All Rights Reserved.
          </p>
          <p className="text-sm text-red-500 mt-2">
            Developed By{" "}
            <a href="#" className="hover:text-red-700">
              Elite Infotech
            </a>
          </p>
        </div>

        {/* Scroll to top button */}
        <a
          href="#top"
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 w-12 rounded-[50%] shadow-lg hover:bg-blue-700 transition"
        >
          ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
