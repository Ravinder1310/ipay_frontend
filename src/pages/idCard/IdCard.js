import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const IdCard = () => {
  const [user, setUser] = useState();
  const [auth] = useAuth();
  const navigate = useNavigate();

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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Layout>
      <div className="w-[90%] pt-28 m-auto">
        <Toaster />
        <div className="w-[100%] text-center shadow-xl shadow-gray-400 rounded-lg py-10 px-6">
        <div
            className="border-2 border-red-500 bg-red-500 m-auto mt-2 rounded-lg w-[200px] h-[60px] flex items-center px-2 py-4 "
            onClick={() => {
              navigate("/");
            }}
          >
            {/* Left side with the "Z" logo */}
            <div className="">
              <FaShoppingCart className="text-white text-xl" />
            </div>

            {/* Right side with text and icon */}
            <div className="ml-4 text-left">
              <div className="text-white font-extrabold text-lg ml-8">
                I-PAY
              </div>
              <div className="text-white text-sm">#Cashback Har Bar 🛍️</div>
            </div>
          </div>
          <div className="w-[100px] h-[100px] m-auto mt-8 rounded-[50%] bg-red-700"></div>
          <h1 className="mt-4 text-4xl font-bold">{user?.userName}</h1>
          <div className="mt-10 w-[100%]">
            <table className="w-[80%] m-auto">
              <thead>
                <tr>
                  <th className="text-left">User ID:</th>
                  <th className="text-center">{user?.referralCode}</th>
                </tr>
                <tr>
                  <th className="text-left">Mobile:</th>
                  <th className="text-center">{user?.mobileNumber}</th>
                </tr>
                <tr>
                  <th className="text-left">Status:</th>
                  <th className="text-center">
                    {user?.isActive ? "Activated" : "Free"}
                  </th>
                </tr>
                <tr>
                  <th className="text-left">Date:</th>
                  <th className="text-center">
                    {new Date(user?.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "Asia/Kolkata", // Adjust for your timezone
                    })}
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div
          className="w-[100%] mt-20 text-center shadow-xl shadow-gray-400 rounded-lg py-10 px-6"
          style={{
            backgroundImage: "url('/images/certificate3.png')",
            backgroundSize: "cover", // Ensures the image covers the entire div
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          }}
        >
          <div
            className="border-2 border-red-500 bg-red-500 m-auto mt-2 rounded-lg w-[200px] h-[60px] flex items-center px-2 py-4 "
            onClick={() => {
              navigate("/");
            }}
          >
            {/* Left side with the "Z" logo */}
            <div className="">
              <FaShoppingCart className="text-white text-xl" />
            </div>

            {/* Right side with text and icon */}
            <div className="ml-4 text-left">
              <div className="text-white font-extrabold text-lg ml-8">
                I-PAY
              </div>
              <div className="text-white text-sm">#Cashback Har Bar 🛍️</div>
            </div>
          </div>
          <img
            src="/images/dummy_scanner.png"
            className="w-[100px] m-auto mt-10"
            alt="error"
          />
          <div className="text-right mt-10 font-bold">
            <p>abcdefgh</p>
            <h1>Authorised Signature</h1>
          </div>
          <h1 className="text-xl font-bold mt-8">IPay Solutions Pvt Ltd</h1>
          <div className=" text-left mt-6 font-bold">
            <p>www.ipaysolutions.com</p>
            <p>info@ipaysolutions.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IdCard;
