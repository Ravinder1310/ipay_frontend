import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faWater, faGasPump, faLightbulb, faTv, faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
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
    // <div className="w-[95%] sm:w-[90%] m-auto mt-10">
    //   <Toaster />

    //   <h1 className="text-center mb-3 text-2xl sm:text-4xl  font-bold text-white">
    //     Recharge & Bill Pay
    //   </h1>
    //   <div className="flex flex-wrap border-2 rounded-lg gap-y-10 gap-x-4 sm:gap-x-6 bg-blue-300 shadow-2xl justify-center text-sm font-bold py-4 px-2">
    //     <div
    //       className="bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white rounded-xl shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.4)] hover:scale-110 transform transition-all duration-500 ease-in-out w-[90px] sm:w-[110px] h-[100px] flex flex-col items-center justify-center cursor-pointer"
    //       onClick={() => {
    //         navigate("/users/user/recharge-mobile");
    //       }}
    //     >
    //       <img
    //         className="w-[40px] h-[40px]"
    //         src="/images/mobile_recharge.png"
    //         alt="Mobile Recharge"
    //       />
    //       <h4 className="mt-2 text-[12px] text-white font-semibold text-center">
    //         Mobile Recharge
    //       </h4>
    //     </div>

    //     <div
    //       className="bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white rounded-xl shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.4)] hover:scale-110 transform transition-all duration-500 ease-in-out w-[90px] sm:w-[110px] h-[100px] flex flex-col items-center justify-center cursor-pointer"
    //       onClick={handleToast}
    //     >
    //       <img
    //         className="w-[40px] h-[40px]"
    //         src="/images/cylinder.png"
    //         alt="Mobile Recharge"
    //       />
    //       <h4 className="mt-2 text-[12px] text-white font-semibold text-center">
    //         Gas Bill
    //       </h4>
    //     </div>

    //     <div
    //       className="bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white rounded-xl shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.4)] hover:scale-110 transform transition-all duration-500 ease-in-out w-[90px] sm:w-[110px] h-[100px] flex flex-col items-center justify-center cursor-pointer"
    //       onClick={handleToast}
    //     >
    //       <img
    //         className="w-[40px] h-[40px]"
    //         src="/images/dth_bill.png"
    //         alt="Mobile Recharge"
    //       />
    //       <h4 className="mt-2 text-[12px] text-white font-semibold text-center">
    //         DTH Recharge
    //       </h4>
    //     </div>

    //     <div
    //       className="bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white rounded-xl shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.4)] hover:scale-110 transform transition-all duration-500 ease-in-out w-[90px] sm:w-[110px] h-[100px] flex flex-col items-center justify-center cursor-pointer"
    //       onClick={handleToast}
    //     >
    //       <img
    //         className="w-[40px] h-[40px]"
    //         src="/images/electric_bill.png"
    //         alt="Mobile Recharge"
    //       />
    //       <h4 className="mt-2 text-[12px] text-white font-semibold text-center">
    //         Electricity Bills
    //       </h4>
    //     </div>

    //     <div
    //       className="bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white rounded-xl shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.4)] hover:scale-110 transform transition-all duration-500 ease-in-out w-[90px] sm:w-[110px] h-[100px] flex flex-col items-center justify-center cursor-pointer"
    //       onClick={handleToast}
    //     >
    //       <img
    //         className="w-[40px] h-[40px]"
    //         src="/images/water_bill.png"
    //         alt="Mobile Recharge"
    //       />
    //       <h4 className="mt-2 text-[12px] text-white font-semibold text-center">
    //        Water Bill
    //       </h4>
    //     </div>

    //     <div
    //       className="bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white rounded-xl shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.4)] hover:scale-110 transform transition-all duration-500 ease-in-out w-[90px] sm:w-[110px] h-[100px] flex flex-col items-center justify-center cursor-pointer"
    //       onClick={handleToast}
    //     >
    //       <img
    //         className="w-[40px] h-[40px]"
    //         src="/images/fastag.png"
    //         alt="Mobile Recharge"
    //       />
    //       <h4 className="mt-2 text-[12px] text-white font-semibold text-center">
    //         Fastag Recharge
    //       </h4>
    //     </div>

    //     <div
    //       className="bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white rounded-xl shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.4)] hover:scale-110 transform transition-all duration-500 ease-in-out w-[90px] sm:w-[110px] h-[100px] flex flex-col items-center justify-center cursor-pointer"
    //       onClick={handleToast}
    //     >
    //       <img
    //         className="w-[40px] h-[40px]"
    //         src="/images/gas_line.png"
    //         alt="Mobile Recharge"
    //       />
    //       <h4 className="mt-2 text-[12px] text-white font-semibold text-center">
    //         Gas Line
    //       </h4>
    //     </div>

    //     <div
    //       className="bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white rounded-xl shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.4)] hover:scale-110 transform transition-all duration-500 ease-in-out w-[90px] sm:w-[110px] h-[100px] flex flex-col items-center justify-center cursor-pointer"
    //       onClick={handleToast}
    //     >
    //       <img
    //         className="w-[40px] h-[40px]"
    //         src="/images/loan_emi.png"
    //         alt="Mobile Recharge"
    //       />
    //       <h4 className="mt-2 text-[12px] text-white font-semibold text-center">
    //        Loan & EMI
    //       </h4>
    //     </div>
    //   </div>
    // </div>
    <div className="m-auto rounded-xl mt-10 py-6 px-2 bg-gradient-to-b from-orange-200 to-white w-[95%]">
      <h1 className="text-left font-bold mb-4 ml-4">Recharge & Bills </h1>
      <div className="flex flex-wrap justify-center gap-3">

        {/* Mobile Recharge */}
        <div className="w-[29%] flex flex-col items-center justify-center h-[110px]"
        onClick={() => {
              navigate("/users/user/recharge-mobile");
               }}
        >
          <FontAwesomeIcon icon={faMobileAlt} size="2x" style={{color: "#000080"}} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">
            Mobile
          </h4>
        </div>

        {/* Gas Bill */}
        <div className="w-[29%] flex flex-col items-center justify-center h-[110px]" onClick={handleToast}>
          <FontAwesomeIcon icon={faGasPump} size="2x" style={{color: "#000080"}} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">
            Gas Bill
          </h4>
        </div>

        {/* DTH Recharge */}
        <div className="w-[29%] flex flex-col items-center justify-center h-[110px]" onClick={handleToast}>
          <FontAwesomeIcon icon={faTv} size="2x" style={{color: "#000080"}} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">
            DTH
          </h4>
        </div>

        {/* Water Bill */}
        <div className="w-[29%] flex flex-col items-center justify-center h-[110px]" onClick={handleToast}>
          <FontAwesomeIcon icon={faWater} size="2x" style={{color: "#000080"}} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">
            Water Bill
          </h4>
        </div>

        {/* Electricity Bill */}
        <div className="w-[30%] flex flex-col items-center justify-center h-[110px]" onClick={handleToast}>
          <FontAwesomeIcon icon={faLightbulb} size="2x" style={{color: "#000080"}} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">
            Electricity
          </h4>
        </div>

        {/* Loan EMI */}
        <div className="w-[31%] flex flex-col items-center justify-center h-[110px]" onClick={handleToast}>
          <FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" style={{color: "#000080"}} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">
            Loans & EMI
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RechargeAndBill;
