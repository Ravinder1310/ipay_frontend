import React from "react";
import toast, { Toaster } from "react-hot-toast"; // Import Toaster
import { useNavigate } from "react-router-dom";

const RechargeAndBill = () => {
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
    <div className="w-[90%] m-auto mt-10">
      {/* Include Toaster here */}
      <Toaster />

      <h1 className="text-left mb-3 text-2xl font-bold text-white">Recharge & Bill Pay</h1>
      <div className="flex flex-wrap border-2 rounded-lg gap-4 gap-x-5 bg-blue-300 shadow-2xl justify-between text-sm font-bold p-4 px-6">
        <div
          className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[127px] h-[150px] flex flex-col items-center justify-center"
          onClick={() => {
            navigate("/recharge-mobile");
          }}
        >
          <img
            className="w-[70px] h-[60px] m-auto"
            src="/images/mobile_recharge.png"
            alt="Mobile Recharge"
          />
          <h4 className="mt-4">Mobile Recharge</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[120px] h-[150px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[70px] h-[60px] m-auto"
            src="/images/gas_cylinder.png"
            alt="Gas Cylinder"
          />
          <h4 className="mt-4">Gas Cylinder</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[127px] h-[150px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[70px] h-[60px] m-auto"
            src="/images/water_bill.png"
            alt="Water Bill"
          />
          <h4 className="mt-4">Water Bill</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[120px] h-[150px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[70px] h-[60px] m-auto"
            src="/images/electric_bill.png"
            alt="Electricity Bill"
          />
          <h4 className="mt-4">Electricity Bill</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[127px] h-[150px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[70px] h-[60px] m-auto"
            src="/images/dth_bill.png"
            alt="DTH Recharge"
          />
          <h4 className="mt-4">DTH Recharge</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[120px] h-[150px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[70px] h-[60px] m-auto"
            src="/images/fastag.png"
            alt="FasTag"
          />
          <h4 className="mt-4">FasTag</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[127px] h-[150px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[70px] h-[60px] m-auto"
            src="/images/loan_emi.png"
            alt="Loan & EMI"
          />
          <h4 className="mt-4">Loan & EMI</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer w-[120px] h-[150px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[70px] h-[60px] m-auto"
            src="/images/gas_line.png"
            alt="Piped Gas Bill"
          />
          <h4 className="mt-4">Piped Gas Bill</h4>
        </div>
      </div>
    </div>
  );
};

export default RechargeAndBill;
