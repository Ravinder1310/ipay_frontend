import React, { useEffect, useState } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast';
import { useAdminAuth } from "../../../context/adminAuth";

function ActivateUserForm() {
  const [referralCode, setRefferalCode] = useState("");
  const [adminAuth] = useAdminAuth();
  const [activationList, setActivationList] = useState([]);
  const [packages, setPackages] = useState();
  const [isActivating, setIsActivating] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // New state for sidebar toggle
  const navigate = useNavigate();

  const getActivationList = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/activation-list`
      );
      setActivationList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserIdChange = (event) => {
    setRefferalCode(event.target.value);
  };


  const handlePackageChange = (e) => {
    setPackages(e.target.value)
  }
  

  const plans = [
    {
      package_Id:"SMART001",
      name: "Smart Package",
      price: 699,
      des: "E-Book",
      direct_ref_comission: 200,
      b_capping: 700,
      img: "/images/ebook.png",
    },
    {
      package_Id:"PRIME002",
    name: "Prime Package",
    price: 1299,
    des: "E-Book Bundle",
    direct_ref_comission: 500,
    b_capping: 1300,
    img: "/images/ebook_bundle.png",
    }
  ]

  const handleActivate = async (e) => {
    e.preventDefault();
    setIsActivating(true);
    try {
      // const token = adminAuth?.token;
      let plan = {};
      console.log(referralCode);
      if(packages == "smart"){
       plan = plans[0]
      }else{
        plan = plans[1]
      }
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/activate-user`,
        {
          referralCode: referralCode,
          packageId: plan
        }
      );
      toast(response.data.message, {
        duration: 4000, // Duration in milliseconds
        position: 'top-center', // Position of the toast
        style: {
          background: 'white',
          color: 'black',
        },
        icon: '👏', // Add a custom icon
      });
      setRefferalCode(""); // Clear the input fields
    } catch (error) {
      toast(error.message, {
        duration: 4000, // Duration in milliseconds
        position: 'top-center', // Position of the toast
        style: {
          background: 'red',
          color: 'white',
        },
        icon: '😢', // Add a custom icon
      });
    } finally {
      setIsActivating(false); // Reset the button state
    }
  };

 

  useEffect(() => {
    getActivationList();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-4">
      <Toaster/>
      {/* Hamburger Menu */}
      <button
        className="lg:hidden p-4 focus:outline-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 lg:relative w-60 h-full bg-gray-900 lg:w-60 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-50`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        className={` w-full p-4 transition-all`}
      >
        {/* <ToastContainer /> */}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-8 w-full max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Activate / Upgrade Package Now
          </h2>
          <form onSubmit={handleActivate}>
            <div className="mb-6">
              <label
                htmlFor="userId"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                User Id
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="userId"
                className="shadow-sm border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Please Enter Valid User ID"
                value={referralCode}
                onChange={handleUserIdChange}
                disabled={isActivating}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="userId"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Package
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                type="text"
                id="userId"
                className="shadow-sm border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Please Enter Valid User ID"
                value={packages}
                onChange={handlePackageChange}
                disabled={isActivating}
              >
                <option>select Package</option>
                <option value={"smart"}>Smart</option>
                <option value={"prime"}>Prime</option>
                </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`${
                  isActivating
                    ? "bg-gray-500"
                    : "bg-green-500 hover:bg-green-700"
                } text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300`}
                disabled={isActivating}
              >
                {isActivating ? "Activating..." : "Activate Now"}
              </button>
            </div>
          </form>
        </div>

        {/* Latest Activated User Table */}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-8 ml-10 w-full overflow-x-auto">
          <h3 className="text-xl font-bold mb-4 text-center">
            Activated User Id
          </h3>
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-center">#</th>
                <th className="py-2 px-4 border-b text-center">User Id</th>
                <th className="py-2 px-4 border-b text-center">Mobile Number</th>
                <th className="py-2 px-4 border-b text-center">Activated By</th>
                <th className="py-2 px-4 border-b text-center">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {activationList.map((activation, index) => (
                <tr key={activation.id}>
                  <td className="py-2 px-4 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {activation.email}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {activation.mobileNumber}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {activation.activateBy}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {new Date(activation.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ActivateUserForm;
