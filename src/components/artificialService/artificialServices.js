import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";
import {
  faIdCard,
  faCreditCard,
  faFileInvoiceDollar,
  faDigitalTachograph,
  faVoteYea,
  faPassport,
  faMailBulk,
  faThLarge
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons
import { useAuth } from "../../context/auth";

const ArtificialServices = () => {
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
      <h1 className="text-left font-bold mb-4 ml-4">Artificial Services</h1>
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">

        {/* Aadhaar Card */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faIdCard} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">Aadhaar Card</h4>
        </div>

        {/* PAN Card */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faCreditCard} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">PAN Card</h4>
        </div>

        {/* Income Tax */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faFileInvoiceDollar} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">Income Tax</h4>
        </div>

        {/* E-Card */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faDigitalTachograph} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">E-Card</h4>
        </div>

        {/* Voter Card */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faVoteYea} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">Voter Card</h4>
        </div>

        {/* Passport */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faPassport} size="1x" className="text-2xl" />
          </div>
          <h4 className="text-md mt-2 font-semibold text-center h-16">Passport</h4>
        </div>

        {/* Post Office */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faMailBulk} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">Post Office</h4>
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

export default ArtificialServices;
