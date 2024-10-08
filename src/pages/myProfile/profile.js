import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../../components/Layout/Layout";

function MyProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [auth, setAuth] = useAuth();
  const [todayEarnings, setTodayEarnings] = useState(0);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/login");
    toast.success("Logout successfully");
  };

  const getUser = async () => {
    const { id } = auth.user;
    const token = auth.token;

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
        const previousWallet = user ? user.wallet : 0;
        const newWallet = res.data.wallet;

        if (newWallet > previousWallet) {
          const addedAmount = newWallet - previousWallet;
          const today = new Date().toDateString();
          const storedDate = localStorage.getItem("earningsDate");

          if (storedDate === today) {
            const storedEarnings =
              parseFloat(localStorage.getItem("todayEarnings")) || 0;
            const updatedEarnings = storedEarnings + addedAmount;
            setTodayEarnings(updatedEarnings);
            localStorage.setItem("todayEarnings", updatedEarnings);
          } else {
            setTodayEarnings(addedAmount);
            localStorage.setItem("todayEarnings", addedAmount);
            localStorage.setItem("earningsDate", today);
          }
        }

        setUser(res.data);
      } else {
        toast.error("Failed to retrieve user profile");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem("earningsDate");

    if (storedDate !== today) {
      localStorage.setItem("earningsDate", today);
      localStorage.setItem("todayEarnings", 0);
    }

    const storedEarnings =
      parseFloat(localStorage.getItem("todayEarnings")) || 0;
    setTodayEarnings(storedEarnings);

    getUser();
    AOS.init();
  }, []);

  return (
    <Layout title={"My Profile - I-Pay"}>
      <div className="text-white sm:w-2/5 mx-auto min-h-screen pb-24 bg-gradient-to-b from-purple-400 to-blue-500">
        {/* <div className="registerHeader p-4 px-6 text-white shadow-lg shadow-blue-400">
          <button onClick={() => navigate(-1)}>
            <img
              src={"/images/back.png"}
              alt="right arrow"
              className="w-10 h-10"
            />
          </button>
          <h1>My Profile</h1>
        </div> */}

        <div className="px-4 py-8">
          <div className="text-center" data-aos="flip-right">
            <p className="font-bold text-4xl text-slate-50">
              +{user?.mobileNumber}
            </p>
            <p className="text-xl">ID: {user?.referralCode}</p>
          </div>
        </div>

        <div className="border-2 border-white bg-gradient-to-tr from-purple-400 to-blue-500 grid grid-cols-2 md:grid-cols-3 gap-4 rounded-lg p-4 mx-2">
          <div
            data-aos="fade-up-right"
            className="rounded-md p-4 bg-sky-300 text-center shadow-xl transform hover:scale-105 transition-transform"
          >
            <p className="text-black font-bold">
              Rs. {Math.floor(user?.wallet).toLocaleString("en-IN")}
            </p>
            <p className="text-black font-semibold text-sm">Balance Wallet</p>
          </div>

          <div
            data-aos="flip-up"
            className="rounded-md p-4 bg-sky-300 text-center shadow-xl transform hover:scale-105 transition-transform"
          >
            {user?.packages.length > 0 ? (
              <p className="text-white font-bold text-lg">Active</p>
            ) : (
              <p className="text-red-500 font-bold text-sm">Unrecharged</p>
            )}
            <p className="text-black font-semibold text-sm">Package</p>
          </div>

          <div
            data-aos="fade-up-left"
            className="rounded-md p-4 bg-sky-300 text-center shadow-xl transform hover:scale-105 transition-transform"
          >
            <p className="text-black font-bold">
              Rs. {Math.floor(user?.todayEarning).toLocaleString("en-IN")}
            </p>
            <p className="text-black font-semibold text-sm">Earnings Today</p>
          </div>

          <div
            data-aos="fade-down-left"
            className="rounded-md p-4 bg-sky-300 text-center shadow-xl transform hover:scale-105 transition-transform"
          >
            <p className="text-black font-bold">
              Rs. {Math.floor(user?.rechargeWallet).toLocaleString("en-IN")}
            </p>
            <p className="text-black font-semibold text-sm">Recharge Wallet</p>
          </div>

          <div
            data-aos="flip-down"
            className="rounded-md p-4 bg-sky-300 text-center shadow-xl transform hover:scale-105 transition-transform"
          >
            <p className="text-black font-bold">
              Rs. {Math.floor(user?.totalEarning).toLocaleString("en-IN")}
            </p>
            <p className="text-black font-semibold text-sm">Total Earning</p>
          </div>

          <div
            data-aos="fade-down-right"
            className="rounded-md p-4 bg-sky-300 text-center shadow-xl transform hover:scale-105 transition-transform"
          >
            <p className="text-black font-bold">{Math.floor(user?.packages.length)}</p>
            <p className="text-black font-semibold text-sm">Product</p>
          </div>
        </div>

        <div className="px-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div
              data-aos="fade-up-right"
              className="bg-white hover:bg-sky-300 rounded-md p-3 shadow-md flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={"/images/contactmg.png"}
                alt="customer support"
                className="w-10 h-10 mr-4"
              />
              <p className="text-gray-700 font-bold text-lg">Contact Manager</p>
              <img
                src={"/images/viewmore.png"}
                alt="right arrow"
                className="w-10 h-10 ml-auto"
              />
            </div>
            <div
              data-aos="fade-up-right"
              className="bg-white hover:bg-sky-300 rounded-md p-3 shadow-md flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={"/images/myteam.png"}
                alt="customer support"
                className="w-10 h-10 mr-4"
              />
              <p className="text-gray-700 font-bold text-lg">My Team</p>
              <img
                src={"/images/viewmore.png"}
                alt="right arrow"
                className="w-10 h-10 ml-auto"
              />
            </div>

            <div
              data-aos="fade-up-left"
              className="bg-white hover:bg-sky-300 rounded-md p-3 shadow-md flex items-center cursor-pointer"
              onClick={() => navigate("/users/user/invitation")}
            >
              <img
                src={"/images/invite.png"}
                alt="invitation"
                className="w-10 h-10 mr-4"
              />
              <p className="text-gray-700 font-bold text-lg">My Invitation</p>
              <img
                src={"/images/viewmore.png"}
                alt="right arrow"
                className="w-10 h-10 ml-auto"
              />
            </div>

            <div
              data-aos="fade-up"
              className="bg-white hover:bg-sky-300 rounded-md p-3 shadow-md flex items-center cursor-pointer"
              onClick={handleLogout}
            >
              <img
                src={"/images/logout.png"}
                alt="logout"
                className="w-10 h-10 mr-4"
              />
              <p className="text-gray-700 font-bold text-lg">Logout</p>
              <img
                src={"/images/viewmore.png"}
                alt="right arrow"
                className="w-10 h-10 ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyProfile;
