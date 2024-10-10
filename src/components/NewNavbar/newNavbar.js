import React, { useState } from 'react';
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, Button, Box, IconButton, Image } from '@chakra-ui/react';
import { useAuth } from '../../context/auth';
import { FaPhone, FaHome, FaIdCard, FaEdit, FaUniversity, FaImages, FaFilePdf, FaKey, FaExchangeAlt, FaTimes } from 'react-icons/fa';

const NewNavbar = () => {
  const [auth] = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className={`${auth?.token ? ' flex justify-between  z-50 bg-white' : 'hidden'}`}>
        <img src='/images/main_logo.png' className='w-20 h-14' alt='error' />
        <img
          src='/images/new_menu.png'
          className='w-20 h-14 cursor-pointer'
          alt='error'
          onClick={toggleDrawer}
        />
      </div>

      {/* Chakra UI Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={toggleDrawer}  // This will close the drawer
      >
        <DrawerOverlay />
        <DrawerContent 
          bg="white" 
          maxWidth="85vw" 
          width="85vw"
        >
          {/* Top Section with User Info and Close Button */}
          <Box bg="red.600" p={4} borderTopRightRadius="20px" position="relative">
            <Box display="flex" bg={'orange'} marginTop={'-5px'} marginLeft={"-4px"} height={'70px'} width={'310px'} padding={'30px'} gap={'20px'} alignItems="center" mb={4}>
              <Image
                src='/images/avatar.png'
                borderRadius="full"
                boxSize="50px"
                mr={3}
              />
              <Box color="white">
                <div className='text-lg font-bold'>RAVI KUMAR</div>
                <div className='text-sm'>ZP85623972</div>
              </Box>

              {/* Close Button in the profile section */}
              <IconButton
                aria-label="Close Drawer"
                icon={<FaTimes />}
                onClick={toggleDrawer}  // Close the drawer when clicked
                colorScheme="whiteAlpha"
                color="white"
                position="absolute"
                top="25px"
                right="15px"
                bg="transparent"
                _hover={{ bg: 'red.500' }}
              />
            </Box>

            {/* Sponsor and Company Buttons */}
            <Box display="flex" marginTop={'20px'} p={'10px 10px'} marginBottom={'10px'} justifyContent="space-between">
              <Button
                leftIcon={<FaPhone />}
                colorScheme="whiteAlpha"
                bg="orange"
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
                bg="orange"
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
            </Box>
          </Box>

          {/* Drawer Body - Menu Items */}
          <DrawerBody mt={0} p={'10px 30px'}>
            <ul className='space-y-6 text-orange-500 text-xl'>
              <li className='flex items-center space-x-6'>
                <FaHome /> <span>Dashboard</span>
              </li>
              <li className='flex items-center space-x-6'>
                <FaIdCard /> <span>My Team</span>
              </li>
              <li className='flex items-center space-x-6'>
                <FaEdit /> <span>Matching Income</span>
              </li>
              <li className='flex items-center space-x-6'>
                <FaUniversity /> <span>Level Income</span>
              </li>
              <li className='flex items-center space-x-6'>
                <FaImages /> <span>Invitation</span>
              </li>
              <li className='flex items-center space-x-6'>
                <FaFilePdf /> <span>Log Out</span>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NewNavbar;
