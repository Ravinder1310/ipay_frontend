import React from "react";

const MainTransfer = () => {
  return (
    <div className="w-[95%] m-auto mt-10 bg-transparent">
      <h1 className="text-left mb-3 text-2xl font-bold text-white">
        Money Transfer
      </h1>
      <div className="flex flex-wrap border-2 rounded-lg gap-4 bg-blue-300 shadow-2xl justify-between px-1 py-4">
        <div className="hover:bg-gray-200 p-2 rounded-lg  hover:cursor-pointer w-[100px] h-[100px] flex flex-col items-center justify-center">
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/add_money.png"
            alt="error"
          />
          <h4 className="">Add Money</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg  hover:cursor-pointer w-[100px] h-[100px] flex flex-col items-center justify-center">
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/send_money.png"
            alt="error"
          />
          <h4>Send Money</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg  hover:cursor-pointer w-[100px] h-[100px] flex flex-col items-center justify-center">
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/scan_pay.png"
            alt="error"
          />
          <h4>Scan to Pay</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[100px] h-[100px] flex flex-col items-center justify-center">
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/upi.png"
            alt="error"
          />
          <h4>Pay to UPI</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[100px] h-[100px] flex flex-col items-center justify-center">
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/redeem_money.png"
            alt="error"
          />
          <h4>Redeem Money</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[100px] h-[100px] flex flex-col items-center justify-center">
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/upi.png"
            alt="error"
          />
          <h4>Add UPI Cash</h4>
        </div>
      </div>
    </div>
  );
};

export default MainTransfer;
