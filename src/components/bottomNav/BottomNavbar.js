import React from "react";

const BottomNavbar = () => {
  return (
    <div className="fixed sm:hidden rounded-full bottom-3 left-2 sm:left-[26%] h-[80px] bg-white shadow-md w-[95%] sm:w-[50%]">
      <div className="flex justify-around items-center py-2">

        {/* Wealth Section */}
        <div className="flex flex-col items-center">
          <div className="text-xl text-black">
            <img src="/images/home_logo.png" className="w-[40px]" alt="error"/>
          </div>
        </div>

        {/* Insurance Section */}
        <div className="flex flex-col items-center">
        <img src="/images/packages.png" className="w-[40px]" alt="error"/>
        </div>

        {/* QR Code Section (Center Button) */}
        <div className="flex flex-col items-center bg-blue-600 p-3 rounded-full">
          <div className="text-2xl text-white">
            <img src="/images/qr_code.png" className="w-[40px]" alt="error"/>
          </div>
        </div>

        {/* Cashback Section */}
        <div className="flex flex-col items-center">
          <div className="text-xl text-black">
          <img src="/images/rechrge.png" className="w-[40px]" alt="error"/>
          </div>
        </div>

        {/* Loan Section */}
        <div className="flex flex-col items-center">
          <div className="text-xl text-black">
          <img src="/images/profile.png" className="w-[40px]" alt="error"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BottomNavbar;
