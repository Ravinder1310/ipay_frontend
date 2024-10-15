import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faWater,
  faGasPump,
  faLightbulb,
  faTv,
  faMoneyCheckAlt,
  faMoneyCheck,
  faThLarge
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";

const RechargeAndBill = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra modal hooks

  return (
    <div className={`${auth?.token ? "m-auto rounded-xl mt-10 py-6 px-2 bg-white shadow-xl text-red-700 w-[95%]" : "hidden"}`}>
      <h1 className="text-left font-bold mb-4 ml-4">Recharge & Bills</h1>

      <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
        {/* Mobile Recharge */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={() => { navigate("/users/user/recharge-mobile") }}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faMobileAlt} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">Mobile Recharge</h4>
        </div>

        {/* DTH Recharge */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faTv} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">DTH Recharge</h4>
        </div>

        {/* Water Bill */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faWater} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">Water Bill</h4>
        </div>

        {/* Gas Bill */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faGasPump} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">Gas Bill</h4>
        </div>

        {/* Electricity Bill */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faLightbulb} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">Electricity Bill</h4>
        </div>

        {/* Fastag Recharge */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faMoneyCheckAlt} size="1x" className="text-2xl" />
          </div>
          <h4 className="text-md mt-2 font-semibold text-center h-16">Fastag Recharge</h4>
        </div>

        {/* Loan & EMI */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faMoneyCheck} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">Loan & EMI</h4>
        </div>

        {/* More Options */}
        <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
          <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faThLarge} size="1x" className="text-2xl" />
          </div>
          <h4 className="mt-3 text-md font-semibold text-center h-16">More Options</h4>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
  <ModalOverlay />
  <ModalContent
    maxW="90%" // Set the width to 90% of the screen
    borderRadius="lg" // Add rounded corners
    boxShadow="2xl" // Add a soft shadow for depth
    bg="yellow" // Set background color to red
    color="black" // Ensure text is white for contrast
    margin="auto"
    marginTop="160px"
    padding="20px 20px"
  >
    <ModalCloseButton size="xl" fontWeight="600" justifyContent="right"  color="black" /> {/* White close button for contrast */}
    <ModalBody textAlign="center" p={6}>
      <img
        src="/images/coming.gif"
        alt="Coming Soon"
        className="w-[80%] mx-auto" // Center the image and make it responsive
      />
    </ModalBody>

    <ModalFooter justifyContent="right">
      
    </ModalFooter>
  </ModalContent>
</Modal>


    </div>
  );
};

export default RechargeAndBill;
