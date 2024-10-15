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
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/auth";

const MainTransfer = () => {

 const [auth] = useAuth();
 const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={`${auth?.token ? "m-auto rounded-xl mt-10 py-6 px-2 bg-white shadow-xl text-red-700 w-[95%]" : "hidden"}`}>
    <h1 className="text-left font-bold mb-4 ml-4">Money Transfer</h1>
    {/* <Toaster/> */}
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">

      {/* Aadhaar Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faWallet} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Add Money</h4>
      </div>

      {/* PAN Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faPaperPlane} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Send Money</h4>
      </div>

      {/* Income Tax */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faQrcode} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Scan & Pay</h4>
      </div>

      {/* E-Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faMoneyBillWave} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Pay To Upi</h4>
      </div>

      {/* Voter Card */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faCreditCard} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Credit Card</h4>
      </div>

      {/* Passport */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faGift} size="1x" className="text-2xl" />
        </div>
        <h4 className="text-md mt-2 font-semibold text-center h-16">Redeem Money</h4>
      </div>

      {/* Post Office */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faMoneyCheck} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">Add UPI Cash</h4>
      </div>

      {/* More Options */}
      <div className="w-[20%] flex flex-col items-center justify-center h-[160px]" onClick={onOpen}>
        <div className="rounded-full shadow-xl shadow-slate-300 p-4 flex justify-center items-center">
          <FontAwesomeIcon icon={faThLarge} size="1x" className="text-2xl" />
        </div>
        <h4 className="mt-3 text-md font-semibold text-center h-16">More Options</h4>
      </div>
    </div>
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

export default MainTransfer;
