import React, { useState } from "react";
import backgroundImage from "./login_back.jpg";
import Layout from "../../components/Layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isEmailActive, setIsEmailActive] = useState(true); // State to toggle between email and mobile input

  const toggleButton = () => {
    setIsEmailActive(!isEmailActive); // Toggle between email and mobile
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    if ((isEmailActive && email === "") || password === "") {
      setError("Please fill in all fields");
    } else if (!isEmailActive && (email === "" || !/^\d{10}$/.test(email))) {
      // Assuming mobile number should be 10 digits
      setError("Please enter a valid mobile number");
    } else {
      setError(null);
      // Proceed with login
      console.log("Logging in with:", isEmailActive ? email : "Mobile Number: " + email);
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
        <div className="bg-transparent rounded-lg backdrop-blur-xl text-white shadow-md p-6 w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <div className="flex justify-between p-5 px-10">
            <button
              onClick={toggleButton}
              className={`flex-1 px-4 py-2 rounded-lg transition-colors duration-300 ${
                isEmailActive
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 mr-2`}
            >
              Email
            </button>
            <button
              onClick={toggleButton}
              className={`flex-1 px-4 py-2 rounded-lg transition-colors duration-300 ${
                !isEmailActive
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50`}
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  value={email} // Reusing the same state for mobile number
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
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
