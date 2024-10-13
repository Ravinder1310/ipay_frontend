import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faCcVisa, faCcAmex, faCcJcb
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import toast, { Toaster } from "react-hot-toast"; // Import Toaster
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const CibilScore = () => {
    const navigate = useNavigate();
    const [auth] = useAuth();

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
    <div className={`${auth?.token ? "m-auto rounded-xl mt-10 py-6 px-2 bg-white shadow-xl text-red-700 w-[95%]" : "hidden"}`}>
    <h1 className="text-left font-bold mb-4 ml-4">Cibil Score/ Credit Card/ Loan</h1>
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">

      {/* Aadhaar Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faCreditCard} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Check Cibil Score</h4>
      </div>

      {/* PAN Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          {/* <FontAwesomeIcon icon={faTicketAlt} size="1x" className="text-2xl" /> */}
          <img src="/images/sbi.png" width={'40px'}/>
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">SPI Credit Card</h4>
      </div>

      {/* Income Tax */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
        <img src="/images/icici.png" width={'40px'}/>

        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">ICICI Credit Card</h4>
      </div>

      {/* E-Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
        <img src="/images/hdfc.png" width={'40px'}/>

        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">HDFC Credit Card</h4>
      </div>
      
    </div>
  </div>
  )
}

export default CibilScore