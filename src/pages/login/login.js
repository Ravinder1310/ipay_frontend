import React, { useState } from "react";
import backgroundImage from "./login_back.jpg";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mobileNumber.trim() === "" || password.trim() === "") {
      toast.error("Please fill in all fields.");
      return;
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const payload = { mobileNumber, password };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        payload
      );

      if (response.status === 200 && response.data.success) {
        setAuth({
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem(
          "auth",
          JSON.stringify({
            user: response.data.user,
            token: response.data.token,
          })
        );
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.error("Login error:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="h-screen sm:h-auto flex justify-center items-center sm:pb-10"
      style={{
        backgroundColor: "#ed7e31", // Red background color
      }}
    >
      <Toaster />
      <div className="bg-white rounded-xl text-black shadow-lg p-6 w-[85%] sm:w-[32%] h-[540px] sm:h-[600px]  sm:mt-8">
        {/* Zed Pay Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/main_logo.png" // Use your logo image
            alt="I Pay Logo"
            className="w-28 h-28 cursor-pointer"
            onClick={() => {navigate("/")}}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-left mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter User ID or Mobile Number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-left mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="flex justify-between text-sm mb-4">
            <div></div>
            <a href="/forgot-tpin" className="text-gray-600 hover:text-blue-600">
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className={`w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center shadow-md ${
              loading ? "bg-gray-500 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Login"}
          </button>
        </form>
        <div className="flex justify-center gap-2 items-center mt-4">
          <p className="text-sm">Don’t have an account?</p>
          <a href="/signup" className="text-gray-600 hover:text-blue-600 text-sm">
             Register Now
          </a>
        </div>
        <div className="mt-6 text-center">
          <span className="text-gray-500">Unable to login? </span>
          <a href="/help" className="text-red-600 font-semibold">
            Help
          </a>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <img src="/images/watsapp_logo.png" alt="WhatsApp" className="w-6 h-6" />
          <img src="/images/telegram_logo.png" alt="Telegram" className="w-6 h-6" />
          <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6" />
          <img src="/images/insta.png" alt="Instagram" className="w-6 h-6" />
          <img src="/images/youTube_logo.png" alt="YouTube" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Login;
