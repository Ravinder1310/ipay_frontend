// Import necessary FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faQrcode, faGlobe, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
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

export default function ProgressBar() {

 const [auth] = useAuth();
 const navigate = useNavigate();
 const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={`${auth?.token ? "flex items-center justify-center w-full bg-gray-100 px-2 sm:px-8 py-2" : "hidden"}`}>
      <div className="relative flex items-center justify-between w-full">
        {/* Horizontal line */}
        <div className="absolute w-full h-1 sm:h-2 bg-red-400 rounded-full"></div>

        {/* Circle with icons */}
        <div className="relative z-1 flex justify-between w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div onClick={() => {navigate("/users/user/zoom-meeting")}} className="w-8 h-8 sm:w-12 sm:h-12 cursor-pointer bg-white rounded-full flex items-center justify-center border-4 border-transparent">
              <FontAwesomeIcon icon={faBuilding} className="text-red-500 text-2xl" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div onClick={() => {navigate("/users/user/qr-code")}} className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center cursor-pointer border-4 border-transparent">
              <FontAwesomeIcon icon={faQrcode} className="text-red-500 text-2xl" />
            </div>
          </div>

          {/* Step 3 (highlighted as "PRIME") */}
          <div className="flex flex-col items-center">
            <div onClick={() => {navigate("/users/user/prime-details")}}  className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center cursor-pointer border-4 border-transparent">
              <span className="bg-red-500 text-white px-2 py-1 rounded-full">PRIME</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div onClick={onOpen} className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center cursor-pointer border-4 border-transparent">
              <FontAwesomeIcon icon={faQrcode} className="text-red-500 text-2xl" />
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center">
            <div onClick={() => {navigate("/users/user/invite")}} className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center cursor-pointer border-4 border-transparent">
              <FontAwesomeIcon icon={faShareAlt} className="text-red-500 text-2xl" />
            </div>
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
    </div>
  );
}
