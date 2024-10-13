import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoneyBillTransfer, faMapMarkerAlt, faHeartbeat, faMotorcycle, faCar, faUniversity, faBook, faThLarge
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import toast, { Toaster } from "react-hot-toast"; // Import Toaster
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Banking = () => {
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
    <h1 className="text-left font-bold mb-4 ml-4">Banking & financial Services</h1>
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">

      {/* Aadhaar Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faMoneyBillTransfer} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Money Transfer</h4>
      </div>

      {/* PAN Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">ATM Locator</h4>
      </div>

      {/* Income Tax */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faHeartbeat} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Health Insaurance</h4>
      </div>

      {/* E-Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faMotorcycle} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Bike Insaurance</h4>
      </div>

      {/* Voter Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faCar} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Car Insaurance</h4>
      </div>

      {/* Passport */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faUniversity} size="1x" className="text-2xl" />
        </div>
        <h4 className="text-md mt-2 font-semibold text-center h-16">Banking</h4>
      </div>

      {/* Post Office */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={handleToast}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faBook} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Passbook</h4>
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
  )
}

export default Banking