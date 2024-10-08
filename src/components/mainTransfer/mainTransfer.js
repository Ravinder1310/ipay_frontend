import React from "react";

const MainTransfer = () => {
  return (
    <div className="w-[95%] sm:w-[90%] m-auto mt-10 bg-transparent">
      <h1 className="text-left mb-3 text-2xl font-bold text-white">
        Money Transfer
      </h1>
      <div className="flex flex-wrap border-2 rounded-lg gap-y-4 gap-x-2 bg-blue-300 shadow-2xl justify-between px-1 sm:px-8 py-4">
        {/* Add Money Card */}
        <div
          className="bg-gradient-to-br from-green-400 to-teal-600 p-2 rounded-xl border-2 border-transparent shadow-lg hover:shadow-[0px_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 ease-in-out w-[100px] h-[120px] flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <img
              className="w-[30px] h-[30px]"
              src="/images/add_money.png"
              alt="Add Money"
            />
          </div>
          <h4 className="mt-2 text-[14px] text-white font-semibold text-center">
            Add Money
          </h4>
        </div>

        {/* Send Money Card */}
        <div
          className="bg-gradient-to-br from-blue-400 to-purple-500 p-2 rounded-xl border-2 border-transparent shadow-lg hover:shadow-[0px_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 ease-in-out w-[100px] h-[120px] flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <img
              className="w-[30px] h-[30px]"
              src="/images/send_money.png"
              alt="Send Money"
            />
          </div>
          <h4 className="mt-2 text-[14px] text-white font-semibold text-center">
            Send Money
          </h4>
        </div>

        {/* Scan to Pay Card */}
        <div
          className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-xl border-2 border-transparent shadow-lg hover:shadow-[0px_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 ease-in-out w-[100px] h-[120px] flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <img
              className="w-[30px] h-[30px]"
              src="/images/scan_pay.png"
              alt="Scan to Pay"
            />
          </div>
          <h4 className="mt-2 text-[14px] text-white font-semibold text-center">
            Scan to Pay
          </h4>
        </div>

        {/* Pay to UPI Card */}
        <div
          className="bg-gradient-to-br from-pink-400 to-red-500 p-2 rounded-xl border-2 border-transparent shadow-lg hover:shadow-[0px_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 ease-in-out w-[100px] h-[120px] flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <img
              className="w-[30px] h-[30px]"
              src="/images/upi.png"
              alt="Pay to UPI"
            />
          </div>
          <h4 className="mt-2 text-[14px] text-white font-semibold text-center">
            Pay to UPI
          </h4>
        </div>

        {/* Redeem Money Card */}
        <div
          className="bg-gradient-to-br from-indigo-400 to-blue-600 p-2 rounded-xl border-2 border-transparent shadow-lg hover:shadow-[0px_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 ease-in-out w-[100px] h-[120px] flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <img
              className="w-[30px] h-[30px]"
              src="/images/redeem_money.png"
              alt="Redeem Money"
            />
          </div>
          <h4 className="mt-2 text-[14px] text-white font-semibold text-center">
            Redeem Money
          </h4>
        </div>

        {/* Add UPI Cash Card */}
        <div
          className="bg-gradient-to-br from-green-500 to-lime-600 p-2 rounded-xl border-2 border-transparent shadow-lg hover:shadow-[0px_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 hover:-translate-y-2 transform transition-all duration-300 ease-in-out w-[100px] h-[120px] flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <img
              className="w-[30px] h-[30px]"
              src="/images/upi.png"
              alt="Add UPI Cash"
            />
          </div>
          <h4 className="mt-2 text-[14px] text-white font-semibold text-center">
            Add UPI Cash
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MainTransfer;
