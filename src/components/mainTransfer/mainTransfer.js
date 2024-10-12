import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faPaperPlane,
  faQrcode,
  faMoneyBillWave,
  faGift,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons

const MainTransfer = () => {
  return (
    <div className="m-auto rounded-xl mt-10 py-6 px-2 bg-gradient-to-b from-orange-200 to-white w-[95%]">
      <h1 className="text-left font-bold mb-4 ml-4">Money Transfer</h1>
      <div className="flex flex-wrap justify-between gap-3">

        {/* Add Money Card */}
        <div className="w-[29%] flex flex-col items-center justify-center h-[110px]">
          <FontAwesomeIcon icon={faWallet} size="2x" style={{ color: "#000080" }} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">Add Money</h4>
        </div>

        {/* Send Money Card */}
        <div className="w-[29%] flex flex-col items-center justify-center h-[110px]">
          <FontAwesomeIcon icon={faPaperPlane} size="2x" style={{ color: "#000080" }} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">Send Money</h4>
        </div>

        {/* Scan & Pay Card */}
        <div className="w-[29%] flex flex-col items-center justify-center h-[110px]">
          <FontAwesomeIcon icon={faQrcode} size="2x" style={{ color: "#000080" }} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">Scan & Pay</h4>
        </div>

        {/* Pay to UPI Card */}
        <div className="w-[29%] flex flex-col items-center justify-center h-[110px]">
          <FontAwesomeIcon icon={faMoneyBillWave} size="2x" style={{ color: "#000080" }} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">Pay to UPI</h4>
        </div>

        {/* Redeem Money Card */}
        <div className="w-[30%] flex flex-col items-center justify-center h-[130px]">
          <FontAwesomeIcon icon={faGift} size="2x" style={{ color: "#000080" }} />
          <h4 className="text-[14px] mt-2 font-semibold text-center">Redeem Money</h4>
        </div>

        {/* Add UPI Cash Card */}
        <div className="w-[31%] flex flex-col items-center justify-center h-[110px]">
          <FontAwesomeIcon icon={faMoneyCheck} size="2x" style={{ color: "#000080" }} />
          <h4 className="mt-3 text-[14px] font-semibold text-center">Add UPI Cash</h4>
        </div>
      </div>
    </div>
  );
};

export default MainTransfer;
