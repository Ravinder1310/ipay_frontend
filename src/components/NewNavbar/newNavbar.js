import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { useAuth } from "../../context/auth";
import {
  FaShoppingCart,
  FaHome,
  FaIdCard,
  FaEdit,
  FaUniversity,
  FaImages,
  FaFilePdf,
  FaKey,
  FaExchangeAlt,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const NewNavbar = () => {
  const [auth, setAuth] = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState();

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const getUser = async () => {
    const id = auth?.user?.id;
    const token = auth?.token;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/profile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res && res.data) {
        setUser(res.data);
        console.log(res.data);
      } else {
        toast("Failed to retrieve user profile");
      }
    } catch (error) {
      console.log(error);
      toast("Something went wrong");
    }
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast("Logout successfully");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  useEffect(() => {
    if (auth?.token) {
      getUser();
    }
  }, []);

  return (
    <div>
      <Toaster />
      <div
        className={`${
          auth?.token
            ? "flex justify-between z-40 items-center shadow-2xl bg-white p-2 fixed w-full"
            : "hidden"
        }`}
      >
        {/* <img src='/images/main_logo.png' className='w-20 h-14 cursor-pointer' alt='error' onClick={() => { navigate("/") }} /> */}
        <div className="flex items-center gap-4">
          <img
            src="/images/dark.png"
            className="w-10 h-8 cursor-pointer"
            alt="error"
            onClick={toggleDrawer}
          />
          <img onClick={() => {navigate("/")}} src="/images/ban.png" className="w-[95%] m-auto h-[50px]" alt="error"/>
        </div>

        <img
          src="/images/bell1.png"
          className="w-16 h-12 cursor-pointer"
          alt="error"
          onClick={toggleDrawer}
        />
      </div>

      {/* Chakra UI Drawer */}
      <div className="z-50">
        <Drawer
          isOpen={isDrawerOpen}
          placement="left"
          onClose={toggleDrawer} // This will close the drawer
        >
          <DrawerOverlay />
          <DrawerContent
            bg="white"
            maxWidth="85vw"
            width="85vw"
            marginTop={"75px"}
            zIndex={"50"}
          >
            {/* Top Section with User Info and Close Button */}
            <Box
              bg="red.600"
              p={4}
              borderTopRightRadius="20px"
              position="relative"
            >
              <Box
                display="flex"
                bg={"#b71b1d"}
                marginTop={"-5px"}
                marginLeft={"-4px"}
                height={"70px"}
                width={"101%"}
                padding={"30px"}
                gap={"20px"}
                alignItems="center"
                mb={4}
              >
                <Image
                  src="/images/avatar.png"
                  borderRadius="full"
                  boxSize="50px"
                  mr={3}
                />
                <Box color="white">
                  <div className="text-lg font-bold">{user?.userName}</div>
                  <div className="text-sm">{user?.referralCode}</div>
                </Box>

                {/* Close Button in the profile section */}
                <IconButton
                  aria-label="Close Drawer"
                  icon={<FaTimes />}
                  onClick={toggleDrawer} // Close the drawer when clicked
                  colorScheme="whiteAlpha"
                  color="white"
                  position="absolute"
                  top="25px"
                  right="15px"
                  bg="transparent"
                  _hover={{ bg: "red.500" }}
                />
              </Box>

              {/* Sponsor and Company Buttons */}
              {/* <Box display="flex" marginTop={'10px'} p={'10px 10px'} marginBottom={'10px'} justifyContent="space-between">
              <Button
                leftIcon={<FaPhone />}
                colorScheme="whiteAlpha"
                bg="#b71b1d"
                size="sm"
                fontWeight={'600'}
                color={'white'}
                padding={'10px 10px'}
                borderRadius="20px"
                w="45%"
                _hover={{ bg: 'red.400' }}
              >
                Sponsor
              </Button>
              <Button
                leftIcon={<FaPhone />}
                colorScheme="whiteAlpha"
                bg="#b71b1d"
                size="sm"
                fontWeight={'600'}
                color={'white'}
                padding={'10px 10px'}
                borderRadius="20px"
                w="45%"
                _hover={{ bg: 'red.400' }}
              >
                Company
              </Button>
            </Box> */}
            </Box>

            {/* Drawer Body - Menu Items */}
            <DrawerBody mt={0} p={"10px 30px"}>
              <ul className="space-y-6 text-red-700 text-xl">
                <li
                  className="flex items-center space-x-6 hover:cursor-pointer hover:text-black"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <FaHome /> <span>Dashboard</span>
                </li>
                <li
                  className="flex items-center space-x-6 hover:cursor-pointer hover:text-black"
                  onClick={() => {
                    navigate("/users/user/id-card");
                  }}
                >
                  <FaIdCard /> <span>ID Card</span>
                </li>
                <li
                  className="flex items-center space-x-6 hover:cursor-pointer hover:text-black"
                  onClick={() => {
                    navigate("/users/user/tree");
                  }}
                >
                  <FaIdCard /> <span>My Team</span>
                </li>
                <li
                  className="flex items-center space-x-6 hover:cursor-pointer hover:text-black"
                  onClick={() => {
                    navigate("/users/user/matching-income");
                  }}
                >
                  <FaEdit /> <span>Matching Income</span>
                </li>
                <li
                  className="flex items-center space-x-6 hover:cursor-pointer hover:text-black"
                  onClick={() => {
                    navigate("/users/user/level-income");
                  }}
                >
                  <FaUniversity /> <span>Level Income</span>
                </li>
                <li
                  className="flex items-center space-x-6 hover:cursor-pointer hover:text-black"
                  onClick={() => {
                    navigate("/users/user/recharge-income");
                  }}
                >
                  <FaUniversity /> <span>Recharge History & Income</span>
                </li>
                
                <li
                  className="flex items-center space-x-6 hover:cursor-pointer hover:text-black"
                  onClick={() => {
                    navigate("/users/user/invite");
                  }}
                >
                  <FaImages /> <span>Invitation</span>
                </li>
                <li
                  className="flex items-center space-x-6 hover:cursor-pointer hover:text-black"
                  onClick={handleLogout}
                >
                  <FaFilePdf /> <span>Log Out</span>
                </li>
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default NewNavbar;
