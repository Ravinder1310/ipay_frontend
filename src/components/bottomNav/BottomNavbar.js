import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaHome, FaIdCard, FaEdit, FaUniversity, FaImages, FaFilePdf, FaKey, FaExchangeAlt, FaTimes, FaAddressBook } from 'react-icons/fa';

const BottomNavbar = () => {

 const navigate = useNavigate();
 const text1 = "My Bussiness";
 const text2 = "Recharge";
 const text3 = "Packages";

 const handleToast = () => {
  toast("Sorry for the inconvenience but currently We are working on this", {
    duration: 4000,
    position: "top-center",
    style: {
      background: "yellow",
      color: "black",
      fontWeight: 600,
    },
    icon: `😞`,
  });
 };

  return (
    <div className="fixed bottom-0 h-[80px] bg-blue-300 text-blue-900 shadow-md w-full z-20">
      <div className="flex justify-around items-center py-2">

        {/* Home Section */}
        <div className="flex flex-col items-center hover:bg-blue-600 hover:text-white hover:cursor-pointer p-2 rounded-md" onClick={() => { navigate("/") }}>
          <div className=" text-md text-center">
            <FaHome className="m-auto"/>
            <p>Home</p>
          </div>
        </div>

        {/* Packages Section */}
        <div className="flex flex-col items-center hover:bg-blue-600 hover:text-white hover:cursor-pointer p-1 rounded-md" onClick={() => { navigate("/users/user/packages") }}>
           <div className="text-md text-center">
            <FaIdCard className="m-auto"/>
            
            <p>{text1.substring(0, 7)}...</p>
          </div>
        </div>

        {/* Recharge Section */}
        <div className="flex flex-col items-center hover:bg-blue-600 hover:text-white hover:cursor-pointer p-1 rounded-md" onClick={() => { navigate("/users/user/recharge-mobile") }}>
        <div className="text-md text-center">
            <FaPhone className="m-auto"/>
            <p>{text2.substring(0, 10)}</p>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center hover:bg-blue-600 hover:text-white hover:cursor-pointer p-1 rounded-md" onClick={() => { navigate("/users/user/packages") }}>
        <div className="text-md text-center">
            <FaAddressBook className="m-auto"/>
            <p>{text3}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BottomNavbar;
