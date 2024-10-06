import React, { useState } from "react";
import backgroundImage from "./login_back.jpg";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState(""); // Separate state for mobile number
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isEmailActive, setIsEmailActive] = useState(true); // Toggle between email and mobile input
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate()
  const [auth,setAuth] = useAuth()
  const toggleButton = () => {
    setIsEmailActive(!isEmailActive);
    setError(null); // Clear errors when toggling
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Frontend Validation
    if (isEmailActive) {
      if (email.trim() === "" || password.trim() === "") {
        setError("Please fill in all fields.");
        return;
      }
    } else {
      if (mobileNumber.trim() === "" || password.trim() === "") {
        setError("Please fill in all fields.");
        return;
      } else if (!/^\d{10}$/.test(mobileNumber)) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }
    }

    setLoading(true); // Start loading

    try {
      // Prepare payload based on active input
      const payload = isEmailActive
        ? { email, password }
        : { mobileNumber, password };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        payload
      );

      if (response.status === 200 && response.data.success) {
        setError(null);
        setAuth({
          user: response.data.user,
          token: response.data.token,
      });
      localStorage.setItem('auth', JSON.stringify({
          user: response.data.user,
          token: response.data.token,
      }));
        navigate('/')
        console.log("Login successful:", response.data);
        // You can also set a success message state if you prefer
      } else {
        setError("An unexpected error occurred.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      console.error("Login error:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Layout>
      <div
        className="bg-gray-100 h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gray-300 rounded-lg text-black shadow-md p-6 w-[80%] sm:w-[28%]">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <div className="flex justify-between p-5 px-10">
            <button
              onClick={toggleButton}
              className={`flex-1 px-4 py-2 rounded-lg transition-colors duration-300 ${
                isEmailActive
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 mr-2`}
            >
              Email
            </button>
            <button
              onClick={toggleButton}
              className={`flex-1 px-4 py-2 rounded-lg transition-colors duration-300 ${
                !isEmailActive
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50`}
            >
              Mobile
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Conditionally render input based on selected option */}
            {isEmailActive ? (
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-left mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Enter your working email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block shadow-lg w-full p-2.5"
                  required
                />
              </div>
            ) : (
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block shadow-lg w-full p-2.5"
                  placeholder="10-digit mobile number"
                  required
                />
              </div>
            )}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm mb-4">{error}</div>
            )}
            <button
              type="submit"
              className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800"
              }`}
              disabled={loading} // Disable button when loading
            >
              {loading ? "Processing..." : "Login"}
            </button>
          </form>
          <div className="text-sm text-gray-500 mt-4 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
