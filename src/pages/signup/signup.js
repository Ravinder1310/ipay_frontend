import React, { useState } from "react";
import backgroundImage from "./login_back.jpg";
import Layout from "../../components/Layout/Layout";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your signup logic here
    if (!name || !email || !phone || !password) {
      setError("Please fill in all fields");
    } else if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number");
    } else {
      setError(null);
      // Proceed with signup
      console.log("Signing up with:", { name, email, phone, password, referredBy });
      // You can add your signup logic here, e.g., API call
    }
  };

  return (
    <Layout>
      <div
        className="bg-gray-100 h-full pb-10 flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-transparent rounded-lg backdrop-blur-xl text-white shadow-md p-6 w-full max-w-sm mt-[50px]">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-left mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

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

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-left mb-2"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="10-digit mobile number"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="referredBy"
                className="block text-sm font-medium text-left mb-2"
              >
                Referred By
              </label>
              <input
                type="text"
                id="referredBy"
                value={referredBy}
                placeholder="Enter referrer's name (optional)"
                onChange={(e) => setReferredBy(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
          </form>
          <div className="text-sm text-gray-500 mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
