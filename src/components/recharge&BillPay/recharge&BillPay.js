import React from "react";

const RechargeAndBill = () => {
  return (
    <div className="w-[90%] m-auto mt-10">
      <h1 className="text-left mb-3 text-2xl font-bold">Recharge & Bill Pay</h1>
      <div className="flex flex-wrap border-2 rounded-lg gap-14 bg-white shadow-2xl justify-center text-sm font-bold p-4">
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer">
          <img
            className="w-[90px] h-[60px] m-auto"
            src="/images/mobile.png"
            alt="error"
          />
          <h4 className="mt-4">Mobile Recharge</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer">
          <img
            className="w-[90px] h-[60px] m-auto"
            src="/images/cylinder.png"
            alt="error"
          />
          <h4 className="mt-4">Gas Cylinder</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer">
          <img
            className="w-[90px] h-[60px] m-auto"
            src="/images/water.png"
            alt="error"
          />
          <h4 className="mt-4">Water Bill</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer">
          <img
            className="w-[90px] h-[60px] m-auto"
            src="/images/electric.png"
            alt="error"
          />
          <h4 className="mt-4">Electricity Bill</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer">
          <img
            className="w-[90px] h-[60px] m-auto"
            src="/images/dth.png"
            alt="error"
          />
          <h4 className="mt-4">DTH Recharge</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer">
          <img
            className="w-[90px] h-[60px] m-auto"
            src="/images/fastag.png"
            alt="error"
          />
          <h4 className="mt-4">FasTag</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer">
          <img
            className="w-[90px] h-[60px] m-auto"
            src="/images/loan.png"
            alt="error"
          />
          <h4 className="mt-4">Loan & EMI</h4>
        </div>
        <div className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer">
          <img
            className="w-[90px] h-[60px] m-auto"
            src="/images/piped.png"
            alt="error"
          />
          <h4 className="mt-4">Piped Gas Bill</h4>
        </div>
      </div>
    </div>
  );
};

export default RechargeAndBill;
