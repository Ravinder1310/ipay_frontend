import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
 // Assuming you're using toast for notifications
import { useAuth } from "../../context/auth"; // Assuming you have this auth context
import { toast, Toaster } from "react-hot-toast";

const Package = () => {
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("SMART001");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("Fund Wallet");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ auth ] = useAuth(); // Assuming you're using an auth context to get user data
  const user = auth?.user;
  console.log("user paxkage==>",auth)
  const navigate = useNavigate();

  const packages = [
    { package_Id: "SMART001", name: "Smart Package", price: 699 },
    { package_Id: "PRIME002", name: "Prime Package", price: 1299 },
  ];

  // Fetch the selected package details
  const selectedPack = packages.find((pack) => pack.package_Id === selectedPackage);

  const handlePackage = async () => {
    setLoading(true);

    // Check if the user has sufficient balance in the wallet
    const itemPrice = selectedPack?.price;
    if (user?.rechargeWallet < itemPrice) {
      toast.error("Insufficient balance! Please recharge your wallet.");
      setLoading(false);
      return;
    }

    try {
      const userId = user?.id; 
      console.log("user id =======>",userId)
      // Fetching the user ID from the auth context
      const packageId = selectedPackage;
      const paymentMethod = selectedPaymentOption;

      // Making the API call to purchase the package
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/buy-package`,
        { packageId, userId }
      );
      console.log("response====>",response);
      
      if(response.status==200){
        toast(response.data.message);
      }else{
        toast(response.data.message);

      }


    } catch (error) {
      console.error("Error purchasing package:", error);
      if (error.response && error.response.data?.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
 
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-24 pb-7">
        {/* Fund Wallet Header */}
        <Toaster/>
        <div className="shadow-2xl w-[80%] rounded-lg">
          
          <div className="text-green-600 font-bold text-xl mb-4 flex justify-center items-center">
            <div>
              <h1>Fund Wallet</h1>
              <h6>₹ {user?.rechargeWallet || "0.0"}</h6>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white text-red-600 p-8 rounded-lg shadow-2xl w-[90%] max-w-lg mt-8">
          {/* Phone Number Input */}
          <div className="mb-6">
            <label className="block text-red-600 text-left font-semibold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full p-3 border border-red-600 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Package Selection Dropdown */}
          <div className="mb-6">
            <label className="block text-red-600 text-left font-semibold mb-2" htmlFor="packageSelect">
              Select Package
            </label>
            <select
              id="packageSelect"
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="w-full p-3 border bg-white border-red-600 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              {packages.map((pack) => (
                <option key={pack.package_Id} value={pack.package_Id}>
                  {pack.name} - ₹{pack.price}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Option Dropdown */}
          {/* <div className="mb-6">
            <label className="block text-left text-red-600 font-semibold mb-2" htmlFor="paymentOption">
              Payment Option
            </label>
            <select
              id="paymentOption"
              value={selectedPaymentOption}
              onChange={(e) => setSelectedPaymentOption(e.target.value)}
              className="w-full p-3 border bg-white border-red-600 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              {paymentOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div> */}

          {/* Continue Button */}
          <button
            onClick={handlePackage}
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-red-800 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Processing..." : "Continue"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Package;
