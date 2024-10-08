import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BottomNavbar = () => {

 const navigate = useNavigate();

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
    <div className="fixed sm:hidden rounded-full bottom-3 left-2 sm:left-[26%] h-[80px] bg-white shadow-md w-[95%] sm:w-[50%] z-20">
      <div className="flex justify-around items-center py-2">

        {/* Home Section */}
        <div className="flex flex-col items-center" onClick={() => { navigate("/") }}>
          <div className="text-xl text-black">
            <img src="/images/home_logo.png" className="w-[40px]" alt="Home"/>
          </div>
        </div>

        {/* Packages Section */}
        <div className="flex flex-col items-center" onClick={() => { navigate("/users/user/packages") }}>
          <img src="/images/packages.png" className="w-[40px]" alt="Packages"/>
        </div>

        {/* QR Code Section (Center Button) */}
        <div className="flex flex-col items-center bg-blue-600 p-3 rounded-full" onClick={handleToast}>
          <div className="text-2xl text-white">
            <img src="/images/qr_code.png" className="w-[40px]" alt="QR Code"/>
          </div>
        </div>

        {/* Recharge Section */}
        <div className="flex flex-col items-center" onClick={() => { navigate("/users/user/recharge-mobile") }}>
          <div className="text-xl text-black">
            <img src="/images/rechrge.png" className="w-[40px]" alt="Recharge"/>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center" onClick={() => { navigate("/users/user/my-profile") }}>
          <div className="text-xl text-black">
            <img src="/images/profile.png" className="w-[40px]" alt="Profile"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BottomNavbar;
