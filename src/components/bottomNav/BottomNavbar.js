import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaHome, FaIdCard, FaEdit, FaUniversity, FaImages, FaFilePdf, FaKey, FaExchangeAlt, FaTimes, FaAddressBook } from 'react-icons/fa';
import { useAuth } from "../../context/auth";

const BottomNavbar = () => {

 const navigate = useNavigate();
 const [auth] = useAuth();
 const text1 = "My Bussiness";
 const text2 = "Recharge";
 const text3 = "Packages";

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
    <div className={`${auth?.token ? "fixed bottom-0 h-[80px] bg-white text-blue-900 shadow-md w-full z-20" : "hidden"}`}>
      <div className="flex justify-around items-center py-2">

        {/* Home Section */}
        <div className="flex flex-col items-center hover:bg-blue-600 hover:text-white hover:cursor-pointer p-2 rounded-md" onClick={() => { navigate("/") }}>
          <div className=" text-md text-center grid place-items-center">
            {/* <FaHome className="m-auto"/> */}
            <img className="h-6" src={require('./Images/icons8-home.gif')}/>
            <p>Home</p>
          </div>
        </div>

        {/* Packages Section */}
        <div className="flex flex-col items-center hover:bg-blue-600 hover:text-white hover:cursor-pointer p-1 rounded-md" onClick={() => { navigate("/users/user/my-bussiness") }}>
           <div className="text-md text-center grid place-items-center">
            {/* <FaIdCard className="m-auto"/> */}
            <img className="h-6" src={require('./Images/icons8-deposit.gif')}/>

            <p>{text1.substring(0, 7)}...</p>
          </div>
        </div>

        <div className="absolute mx-2 bottom-12 flex justify-center items-center bg-white h-14 w-14 shadow-lg shadow-blue-400  rounded-full  flex-col  hover:bg-blue-600 hover:text-white hover:cursor-pointer p-1" onClick={() => { navigate("/users/user/packages") }}>
           <div className="text-md text-center flex justify-center items-center">
            {/* <FaIdCard className="m-auto"/> */}
            <img className="h-10" src={require('./Images/icons8-qr-code.gif')}/>

            {/* <p>{text1.substring(0, 7)}...</p> */}
          </div>
        </div>

        {/* Recharge Section */}
        <div className="flex flex-col items-center hover:bg-blue-600 hover:text-white hover:cursor-pointer p-1 rounded-md" onClick={() => { navigate("/users/user/recharge-mobile") }}>
        <div className="text-md text-center grid place-items-center">
            {/* <FaPhone className="m-auto"/> */}
            <img className="h-6" src={require('./Images/icons8-us-recharge.gif')}/>

            <p>{text2.substring(0, 10)}</p>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center hover:bg-blue-600 hover:text-white hover:cursor-pointer p-1 rounded-md" onClick={() => { navigate("/users/user/packages") }}>
        <div className="text-md text-center grid place-items-center">
            {/* <FaAddressBook className="m-auto"/> */}
            <img className="h-6" src={require('./Images/icons8-packages.gif')}/>

            <p>{text3}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BottomNavbar;
