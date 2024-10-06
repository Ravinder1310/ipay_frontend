import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faUser, faPhone, faEye, faEyeSlash, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout/Layout";
import backgroundImage from "./login_back.jpg"; // Update with your own image if needed

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [referredBy, setReferredBy] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password) {
      setFormError("Please fill in all fields.");
    } else if (!/^\d{10}$/.test(phone)) {
      setFormError("Please enter a valid 10-digit mobile number.");
    } else {
      setFormError(null);
      setSuccessMessage("Sign-up successful!");
      console.log("Signing up with:", { name, email, phone, password, referredBy });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  return (
    <Layout>
      <div
        className="w-full h-[800px] sm:h-[700px] bg-blue-100 flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="w-[90%] mt-[60px] sm:mt-0 max-w-sm p-8 bg-white rounded-2xl shadow-2xl text-sm justify-center"
          style={{
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "30px",
            background: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <h2 className="text-3xl text-center text-gray-700 font-bold mb-5">Sign Up</h2>
          <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div className="relative w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-none bg-blue-50 shadow-lg focus:ring focus:outline-none focus:ring-blue-300 transition duration-300"
                placeholder="Name"
                required
              />
              <FontAwesomeIcon icon={faUser} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            {/* Email Field */}
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-none bg-blue-50 shadow-lg focus:ring focus:outline-none focus:ring-blue-300 transition duration-300"
                placeholder="Email"
                required
              />
              <FontAwesomeIcon icon={faEnvelope} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Phone Field */}
            <div className="relative w-full">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-none bg-blue-50 shadow-lg focus:ring focus:outline-none focus:ring-blue-300 transition duration-300"
                placeholder="Phone"
                required
              />
              <FontAwesomeIcon icon={faPhone} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Password Field */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-none bg-blue-50 shadow-lg focus:ring focus:outline-none focus:ring-blue-300 transition duration-300"
                placeholder="Password"
                required
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>

            {/* Referral Code */}
            <div className="relative w-full">
              <input
                type="text"
                value={referredBy}
                onChange={(e) => setReferredBy(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-none bg-blue-50 shadow-lg focus:ring focus:outline-none focus:ring-blue-300 transition duration-300"
                placeholder="Referral Code (Optional)"
              />
              <FontAwesomeIcon icon={faCodeBranch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Position Selection */}
            <h2 className="text-gray-600 text-left">Select Position</h2>
            <div className="flex gap-5 justify-between">
              <button
                type="button"
                className={`w-full py-2 rounded-lg transition-all duration-300 ${selectedPosition === "left" ? "bg-blue-500 text-white" : "bg-blue-100 text-gray-600"}`}
                onClick={() => handlePositionSelect("left")}
              >
                Left
              </button>
              <button
                type="button"
                className={`w-full py-2 rounded-lg transition-all duration-300 ${selectedPosition === "right" ? "bg-blue-500 text-white" : "bg-blue-100 text-gray-600"}`}
                onClick={() => handlePositionSelect("right")}
              >
                Right
              </button>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between mt-5 text-gray-600">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-blue-500">Forget Password?</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg py-2 shadow-lg transition duration-500 hover:bg-blue-600"
            >
              Proceed
            </button>

            {/* Success & Error Messages */}
            {successMessage && <p className="text-center text-green-500 mt-3">{successMessage}</p>}
            {formError && <p className="text-center text-red-500 mt-3">{formError}</p>}

            {/* Login Link */}
            <p className="text-center text-gray-600 mt-5">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500">Login</a>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
