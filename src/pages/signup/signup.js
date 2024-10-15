import React, { useState ,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faPhone,
  faEye,
  faEyeSlash,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast"; // Import react-hot-toast
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [referredBy, setReferredBy] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [user1, setUser1] = useState();
  const [user2, setUser2] = useState();
  const [loading, setLoading] = useState(false); // New state for loading
  const [showCongrats, setShowCongrats] = useState(false); // State to handle the modal visibility
  const [userDetails, setUserDetails] = useState(null); // State to store user details

  const fetchUser = async (mobileNumber, referredBy) => {
    console.log("mobile", { mobileNumber, referredBy });

    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/get-registered-user`,
        {
          params: { mobileNumber, referredBy },
        }
      );
      console.log("Response:", res.data.userDetails);
      setUser1(res.data.userDetails.user1);
      setUser2(res.data.userDetails.user2);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !mobileNumber || !password || !selectedPosition) {
      toast("Please fill in all fields."); // Notify user about incomplete fields
      return;
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      toast("Please enter a valid 10-digit mobile number."); // Notify user about invalid mobile number
      return;
    }else if(password !== confirmPassword){
      toast("Confirm password should be same as the password!"); // Notify user about invalid mobile number
      return;
    }

    setLoading(true); // Set loading to true when the form is submitted

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        {
          name,
          email,
          mobileNumber, 
          password,
          referredBy,
          preferredSide: selectedPosition,
        }
      );

      if (response.status === 201) {
        setUserDetails({
          userId: response.data.userId,
          name,
          email,
          mobileNumber,
          registrationDate: new Date().toLocaleString(),
        });
        console.log({
          name,
          email,
          mobileNumber, 
          password,
          referredBy,
          preferredSide: selectedPosition,
        });
        
        toast(response.data.message); // Notify user on success
        setTimeout(() => {
          setShowCongrats(true); // Show congratulation modal after 2 seconds
        }, 2000);
      } else {
        toast("An unexpected error occurred."); // Notify user on unexpected error
      }

      console.log("Signup successful:", response.data);

      await fetchUser(mobileNumber, referredBy);
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        toast(errorMessage); // Notify user about specific error
      } else {
        toast("An error occurred. Please try again."); // Notify user on general error
      }
      console.log("Error during signup:", error);
    } finally {
      setLoading(false); // Set loading to false after the request is completed
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  useEffect(() => {
    // Extract the referral code from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const tempReferralCode = queryParams.get('referral');
    const tempSide = queryParams.get('side');


    // If referral code exists, set it in the referredBy field
    if (tempReferralCode && tempSide) {
      setReferredBy(tempReferralCode);
      setSelectedPosition(tempSide);
    }
  }, []);


  return (
    <div
      className="h-auto sm:h-full flex justify-center items-center sm:pb-10 pb-20 bg-red-700"
    >
      <Toaster />
      <div className="bg-white rounded-xl text-black shadow-lg p-6 w-[90%] sm:w-[32%] h-[700px] sm:h-auto sm:mt-8 mt-10">
        <div className="flex justify-center mb-4">
          <img
            src="/images/main.png" // Use your logo image
            alt="I Pay Logo"
            className="w-28 h-28 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          {/* Name Field */}
          <div className="relative w-full">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 px-4 rounded-full border-none bg-gray-50 shadow-lg focus:ring focus:outline-none focus:ring-red-300 transition duration-300"
              placeholder="Name"
              required
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Email Field */}
          <div className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-full border-none bg-gray-50 shadow-lg focus:ring focus:outline-none focus:ring-red-300 transition duration-300"
              placeholder="Email"
              required
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Phone Field */}
          <div className="relative w-full">
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full h-12 px-4 rounded-full border-none bg-gray-50 shadow-lg focus:ring focus:outline-none focus:ring-red-300 transition duration-300"
              placeholder="Mobile Number"
              required
            />
            <FontAwesomeIcon
              icon={faPhone}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Password Field */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-full border-none bg-gray-50 shadow-lg focus:ring focus:outline-none focus:ring-red-300 transition duration-300"
              placeholder="Password"
              required
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>


          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-full border-none bg-gray-50 shadow-lg focus:ring focus:outline-none focus:ring-red-300 transition duration-300"
              placeholder="Confirm Password"
              required
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          {/* Referral Code */}
          <div className="relative w-full">
            <input
              type="text"
              value={referredBy}
              onChange={(e) => setReferredBy(e.target.value)}
              className="w-full h-12 px-4 rounded-full border-none bg-gray-50 shadow-lg focus:ring focus:outline-none focus:ring-red-300 transition duration-300"
              placeholder="Referral Code"
            />
            <FontAwesomeIcon
              icon={faCodeBranch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600"
            } text-white rounded-full py-2 shadow-lg transition duration-500 hover:bg-blue-700`}
            disabled={loading} // Disable button when loading
          >
            {loading ? "Processing..." : "Proceed"}
          </button>

          <p className="text-center text-gray-600 mt-5">
            Already have an account?{" "}
            <a href="/login" className="text-red-600">
              Login
            </a>
          </p>
        </form>

        {/* Congratulations Modal */}
        {showCongrats && userDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-red-600 p-3 rounded-lg shadow-lg w-96 text-center text-white">
              {/* <h2 className="text-2xl font-bold mb-4">Congratulations!</h2> */}
              <img src="/images/congrats.gif" className="w-[200px] m-auto" alt="error"/>
              <p className="text-white mb-4">
                Your Account has been created successfully !!
              </p>
              <div className="text-left mb-4">
                <table className="border-2 m-auto w-[100%]">
                  <tbody>
                    <tr className="text-center">
                      <td className="border p-2">User Id</td>
                      <td className="border">{user1?.referralCode}</td>
                    </tr>
                    <tr className="text-center">
                      <td className="border p-2">User Name</td>
                      <td className="border">{user1?.userName}</td>
                    </tr>
                    <tr className="text-center">
                      <td className="border p-2">Email Id</td>
                      <td className="border">{user1?.email}</td>
                    </tr>
                    <tr className="text-center">
                      <td className="border p-2">Mobile</td>
                      <td className="border">{user1?.mobileNumber}</td>
                    </tr>
                    <tr className="text-center">
                      <td className="border p-2">Password</td>
                      <td className="border">{user1?.password}</td>
                    </tr>
                    <tr className="text-center">
                      <td className="border p-2">Registeration Date</td>
                      <td className="border">
                        {new Date(user1?.createdAt).toLocaleString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                          hour12: true,
                          timeZone: "Asia/Kolkata", // Adjust for your timezone
                        })}
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td className="border p-2">Sponser Id</td>
                      <td className="border">{user2?.referralCode}</td>
                    </tr>
                    <tr className="text-center">
                      <td className="border p-2">Sponser Name</td>
                      <td className="border">{user2?.userName}</td>
                    </tr>
                    <tr className="text-center">
                      <td className="border p-2">Sponser Mobile</td>
                      <td className="border">{user2?.mobileNumber}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => navigate("/login")}
                className="bg-red-800 text-white py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl active:shadow-sm"
              >
                Go to Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
