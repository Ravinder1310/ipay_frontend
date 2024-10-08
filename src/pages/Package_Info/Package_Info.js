import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Package_Info = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};
  const { name, price, des, direct_ref_comission, b_capping, img } = data || {};
  const [loading, setLoading] = useState(false);
  const [profit, setProfit] = useState(0);
  const [auth,setAuth] = useAuth()
  const user = auth?.user
  // Assuming you have a user object and auth object available in the context or state
 // Replace with your auth state/context
    console.log("package info ==>",auth)
  const handlePackage = async () => {
    setLoading(true);

    // Convert price from string to number for comparison
    const itemPrice = parseFloat(price.replace("₹", "").replace(",", ""));
    
    if (user?.rechargeWallet < itemPrice) {
      toast("Insufficient Balance! Please recharge your wallet first");
      setLoading(false);
      return;
    }

    try {
      const token = auth.token; // Get the user's token from auth
      const userId = auth?.user.id; // Get the user ID from auth
      const packageId = data?.package_Id; // Assuming you have an ID for the package, add it to the data object

      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/buy-package`,
        { packageId, userId }
      );

      // Setting profit based on the package name
      switch (name) {
        case "Smart Package":
          setProfit(200); // Adjust profit based on your logic
          break;
        case "Prime Package":
          setProfit(500); // Adjust profit based on your logic
          break;
        default:
          setProfit(1000); // Default profit for unknown packages
      }

      toast.success(`Congrats! You have bought the package (${name}) successfully.`);

      setTimeout(() => {
        navigate("/users/user/packages");
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        toast(error.response.data.error);
      } else {
        toast("Something went wrong. Please try again.");
      }
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Toaster />
      <div className="py-5 px-4 flex flex-col items-center">
        <h1 className="text-white font-bold text-4xl">{name}</h1>
        {/* Card Container */}
        <div className="flex flex-col border-2 border-white md:flex-row bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-6 w-full max-w-4xl shadow-lg mt-10 transition-transform duration-300 transform hover:scale-105">
          {/* Image Container */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <img
              src={img}
              alt={name}
              className="w-36 h-36 sm:w-96 sm:h-96 rounded-full sm:rounded-sm transform hover:scale-110 transition-transform duration-300 mb-4 md:mb-0 md:mr-6"
            />
          </div>
          {/* Text Container */}
          <div className="flex-grow flex flex-col justify-center">
            <div className="text-white font-bold text-4xl mb-2 drop-shadow-lg">{price}</div>
            <div className="text-white text-xl drop-shadow-md mb-4">{des}</div>
            <div className="text-white text-lg mb-2">
              <span className="font-bold">Direct Referral Commission: </span>
              {direct_ref_comission}
            </div>
            <div className="text-white text-lg mb-6">
              <span className="font-bold">Binary Capping: </span>
              {b_capping}
            </div>
            <div className="text-white text-base mb-4">
              <p>
                This package is part of a binary MLM system. By choosing this package, you will receive a direct referral
                commission of {direct_ref_comission} for every direct referral. Additionally, the binary capping ensures that
                your maximum earnings in a binary pair cycle are limited to {b_capping}. This provides a great opportunity to
                scale your network and grow your passive income.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={handlePackage}
                className="bg-white w-80 border-2 border-white text-blue-500 font-bold py-2 px-6 rounded-full shadow-lg transform hover:translate-y-1 transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                {loading ? "Processing..." : "Purchase"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Package_Info;
