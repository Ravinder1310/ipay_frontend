import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faPaperPlane,
  faQrcode,
  faMoneyBillWave,
  faGift,
  faMoneyCheck,
  faCreditCard, 
  faThLarge
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/auth";

const MainTransfer = () => {

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
    <h1 className="text-left font-bold mb-4 ml-4">Money Transfer</h1>
    {/* <Toaster/> */}
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">

      {/* Aadhaar Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faWallet} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Add Money</h4>
      </div>

      {/* PAN Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faPaperPlane} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Send Money</h4>
      </div>

      {/* Income Tax */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faQrcode} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Scan & Pay</h4>
      </div>

      {/* E-Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faMoneyBillWave} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Pay To Upi</h4>
      </div>

      {/* Voter Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faCreditCard} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Credit Card</h4>
      </div>

      {/* Passport */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faGift} size="1x" className="text-2xl" />
        </div>
        <h4 className="text-md mt-2 font-semibold text-center h-16">Redeem Money</h4>
      </div>

      {/* Post Office */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faMoneyCheck} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Add UPI Cash</h4>
      </div>

      {/* More Options */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faThLarge} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">More Options</h4>
      </div>
    </div>
  </div>
  );
};

export default MainTransfer;
