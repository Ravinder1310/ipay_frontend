import React from "react";

const BottomNavbar = () => {
  return (
    <div className="fixed rounded-full bottom-3 left-2 sm:left-[26%] bg-white shadow-md w-[95%] sm:w-[50%]">
      <div className="flex justify-around items-center py-2">

        {/* Wealth Section */}
        <div className="flex flex-col items-center">
          <div className="text-xl text-black">
            💰 {/* Replace this with an appropriate icon */}
          </div>
          <span className="text-xs font-medium text-black">Wealth</span>
        </div>

        {/* Insurance Section */}
        <div className="flex flex-col items-center">
          <div className="text-xl text-black">
            ☂️ {/* Replace this with an appropriate icon */}
          </div>
          <span className="text-xs font-medium text-black">Insurance</span>
        </div>

        {/* QR Code Section (Center Button) */}
        <div className="flex flex-col items-center bg-blue-600 p-3 rounded-full">
          <div className="text-2xl text-white">
            ⬛ {/* Replace this with an appropriate icon */}
          </div>
        </div>

        {/* Cashback Section */}
        <div className="flex flex-col items-center">
          <div className="text-xl text-black">
            💸 {/* Replace this with an appropriate icon */}
          </div>
          <span className="text-xs font-medium text-black">Cashback</span>
        </div>

        {/* Loan Section */}
        <div className="flex flex-col items-center">
          <div className="text-xl text-black">
            💵 {/* Replace this with an appropriate icon */}
          </div>
          <span className="text-xs font-medium text-black">Loan</span>
        </div>

      </div>
    </div>
  );
};

export default BottomNavbar;
