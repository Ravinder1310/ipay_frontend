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
    <div className="w-[95%] sm:w-[90%] m-auto mt-10">
      {/* Include Toaster here */}
      <Toaster />

      <h1 className="text-left mb-3 text-2xl font-bold text-white">Recharge & Bill Pay</h1>
      <div className="flex flex-wrap border-2 rounded-lg gap-y-10 gap-x-4 sm:gap-x-10 bg-blue-300 shadow-2xl justify-center text-sm font-bold py-4 px-2">
        <div
          className="hover:bg-gray-200 rounded-lg border hover:cursor-pointer  w-[90px] h-[120px] flex flex-col items-center justify-center"
          onClick={() => {
            navigate("/recharge-mobile");
          }}
        >
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/mobile_recharge.png"
            alt="Mobile Recharge"
          />
          <h4 className="mb-2">Mobile Recharge</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 rounded-lg border hover:cursor-pointer w-[90px] h-[120px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/gas_cylinder.png"
            alt="Gas Cylinder"
          />
          <h4 className="mb-2">Gas Cylinder</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 border rounded-lg hover:cursor-pointer  w-[90px] h-[120px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/water_bill.png"
            alt="Water Bill"
          />
          <h4 className="mb-2">Water Bill</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 border rounded-lg hover:cursor-pointer  w-[90px] h-[120px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/electric_bill.png"
            alt="Electricity Bill"
          />
          <h4 className="mb-2">Electricity Bill</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 border rounded-lg hover:cursor-pointer  w-[90px] h-[120px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/dth_bill.png"
            alt="DTH Recharge"
          />
          <h4 className="mb-2">DTH Recharge</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 border rounded-lg hover:cursor-pointer  w-[90px] h-[120px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/fastag.png"
            alt="FasTag"
          />
          <h4 className="mb-2">FasTag</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 border rounded-lg hover:cursor-pointer  w-[90px] h-[120px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/loan_emi.png"
            alt="Loan & EMI"
          />
          <h4 className="mb-2">Loan & EMI</h4>
        </div>

        <div
          className="hover:bg-gray-200 p-2 border rounded-lg hover:cursor-pointer  w-[90px] h-[120px] flex flex-col items-center justify-center"
          onClick={handleToast}
        >
          <img
            className="w-[40px] h-[40px] m-auto"
            src="/images/gas_line.png"
            alt="Piped Gas Bill"
          />
          <h4 className="mb-2">Piped Gas Bill</h4>
        </div>
      </div>
    </div>
  );
};

export default RechargeAndBill;
