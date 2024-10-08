import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Confetti from "react-confetti"; // Import Confetti
import { useAuth } from "../context/auth";

const Recharge = () => {
  const [number, setNumber] = useState("");
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedOperator, setSelectedOperator] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false); // State for handling recharge button loading
  const [loadingPlans, setLoadingPlans] = useState(false); // State for handling "Get Plans" button loading
  const [rechargeResult, setRechargeResult] = useState(null); // State to store recharge success message
  const [showConfetti, setShowConfetti] = useState(false); // State for confetti
  const [auth, setAuth] = useAuth()
  // Mapping of operator names to their codes
  const operatorCodeMap = {
    Airtel: { planCode: "Airtel", rechargeCode: "MAL" },
    Jio: { planCode: "Jio", rechargeCode: "MJL" },
    Vodafone: { planCode: "Vodafone", rechargeCode: "MVL" },
  };

  const username = "APIRA6478033";
  const pwd = "766269";

  // Function to handle mobile number input with validation
  const handleNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]{0,10}$/; // Allows up to 10 digits
    if (regex.test(value)) {
      setNumber(value);
    }
  };

  // Function to fetch plans
  const fetchPlans = async () => {
    if (!number) {
      toast("Please enter your mobile number.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "white",
          fontWeight: 600,
        },
        icon: `⚠️`,
      });
      return;
    }

    if (!selectedOperator) {
      toast("Please select an operator.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "white",
          fontWeight: 600,
        },
        icon: `⚠️`,
      });
      return;
    }

    const operator = operatorCodeMap[selectedOperator];
    if (!operator || !operator.planCode) {
      console.error(`Invalid operator selected: ${selectedOperator}`);
      toast("Invalid operator selected.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "white",
          fontWeight: 600,
        },
        icon: `⚠️`,
      });
      return;
    }

    setLoadingPlans(true); // Start loading
    try {
      console.log("Fetching plans for operator:", selectedOperator);
      console.log("Plan Code:", operator.planCode);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/recharge/get-plans`,
        {
          username,
          pwd,
          operatorcode: operator.planCode, // Use the planCode
        }
      );

      console.log("Get Plans API Response:", response.data);

      if (response.data.plan && response.data.plan.length > 0) {
        setPlans(response.data.plan);
        toast("Plans fetched successfully!", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "green",
            color: "white",
            fontWeight: 600,
          },
          icon: `✅`,
        });
      } else {
        toast("No plans available for the selected operator.", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "red",
            color: "white",
            fontWeight: 600,
          },
          icon: `🤔`,
        });
        setPlans([]);
      }
    } catch (error) {
      console.error("Error fetching plans:", error);
      toast("Error fetching plans. Please try again.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "white",
          fontWeight: 600,
        },
        icon: `😢`,
      });
    } finally {
      setLoadingPlans(false); // End loading
    }
  };

  // Function to handle recharge
  const handleRecharge = async () => {
    if (!selectedPlan || !number) {
      toast("Please select a plan and enter your mobile number.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "white",
          fontWeight: 600,
        },
        icon: `🫠`,
      });
      return;
    }

    const operator = operatorCodeMap[selectedOperator];
    if (!operator || !operator.rechargeCode) {
      console.error(
        `Invalid operator selected for recharge: ${selectedOperator}`
      );
      toast("Invalid operator selected.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "white",
          fontWeight: 600,
        },
        icon: `⚠️`,
      });
      return;
    }

    setLoading(true); // Set loading state to true
    const formData = {
      username,
      pwd,
      operatorcode: operator.rechargeCode, // Use the rechargeCode
      number,
      userId:auth?.user?.id,
      amount: selectedPlan.mrp,
      client_id: Math.floor(10000000 + Math.random() * 90000000).toString(),
    };

    try {
      console.log("Processing recharge for operator:", selectedOperator);
      console.log("Recharge Code:", operator.rechargeCode);
      console.log("Form Data:", formData);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/recharge/recharge`,
        formData
      );

      console.log("Recharge API Response:", response.data);

      setLoading(false); // Reset loading state

      if (response.data.error_code == "0") {
        setRechargeResult(response.data.message); // Set success message
        setShowConfetti(true); // Show confetti
        toast(response.data.message, {
          duration: 4000,
          position: "top-center",
          style: {
            background: "green",
            color: "white",
            fontWeight: 600,
          },
          icon: `😀`,
        });

        // Automatically hide confetti after 5 seconds
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      } else {
        toast(response.data.message || "Recharge failed.", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "red",
            color: "white",
            fontWeight: 600,
          },
          icon: `😢`,
        });
      }
    } catch (error) {
      console.error("Error processing recharge:", error);
      setLoading(false); // Reset loading state
      toast("Error processing recharge.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "red",
          color: "white",
          fontWeight: 600,
        },
        icon: `😢`,
      });
    }
  };

  const handleType = (des) => {
    const typeMatch = des.match(/type\s*:\s*(.*)/);
    const type = typeMatch ? typeMatch[0] : "Type not found";
    setType(type);
  };

  // Function to reset recharge form
  const resetRecharge = () => {
    setRechargeResult(null);
    setNumber("");
    setSelectedOperator("");
    setPlans([]);
    setSelectedPlan(null);
  };

  return (
    <Layout>
      {/* Toaster for showing toast messages */}
      <Toaster />

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="w-[100%]">
        <Confetti
          numberOfPieces={500}
          recycle={false}
          gravity={0.3}
          colors={[
            "#FF0000",
            "#00FF00",
            "#0000FF",
            "#FFFF00",
            "#FF00FF",
            "#00FFFF",
          ]}
        />
        </div>
      )}

      <div className="w-full md:w-[100%] lg:w-[100%] m-auto pt-20 bg-blue-600 h-[700px] sm:pt-10">
        {!selectedPlan && (
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Check Available Plans
          </h2>
        )}

        {/* Conditional Rendering Based on Recharge Result */}
        {!rechargeResult ? (
          <>
            {/* Dropdown for Operator Selection and Mobile Number Input */}
            {plans.length === 0 && (
              <div className="mt-10">
                <div className="flex flex-wrap sm:justify-between w-[70%] sm:w-[50%] m-auto justify-center">
                  <div className="mb-6 w-full sm:w-auto sm:mr-4">
                    <input
                      type="text"
                      placeholder="Enter your mobile number"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={number}
                      onChange={handleNumberChange}
                    />
                  </div>
                  <div className="mb-4 w-full sm:w-auto sm:mr-4">
                    <select
                      name="operator"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                      onChange={(e) => {
                        const operatorName = e.target.value;
                        setSelectedOperator(operatorName);
                        setSelectedPlan(null);
                        setPlans([]); // Clear previous plans when operator changes
                      }}
                      value={selectedOperator}
                    >
                      <option value="">Select Operator</option>
                      <option value="Airtel">Airtel</option>
                      <option value="Jio">Jio</option>
                      <option value="Vodafone">Vodafone</option>
                    </select>
                  </div>

                  {/* Get Plans Button */}
                  <button
                    className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto mb-6 flex items-center justify-center ${
                      loadingPlans ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={fetchPlans}
                    disabled={loadingPlans} // Disable button while loading
                  >
                    {loadingPlans ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                        Getting Plans...
                      </span>
                    ) : (
                      "Get Plans"
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Plans List - Conditionally Rendered */}
            {!selectedPlan && (
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10 max-h-[500px] overflow-y-auto mt-10 w-[90%] sm:w-[50%] m-auto">
                <ul>
                  {plans.length > 0 ? (
                    plans.map((plan, index) => (
                      <li
                        key={index}
                        className="mb-4 p-4 bg-gray-100 rounded shadow-md cursor-pointer hover:bg-blue-100 transition-all"
                      >
                        <p className="text-black font-bold">MRP: ₹{plan.mrp}</p>
                        <p className="text-gray-500">{plan.description}</p>
                        <button
                          className="mt-6 bg-green-500 text-white px-4 py-2 font-bold rounded-lg"
                          onClick={() => {
                            setSelectedPlan(plan);
                            handleType(plan.description);
                          }}
                        >
                          Select Plan
                        </button>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-600 text-center">
                      Your searched plans will appear here
                    </p>
                  )}
                </ul>
              </div>
            )}

            {/* Selected Plan Details */}
            {selectedPlan && (
              <div className="mt-6 bg-gray-200 p-6 rounded-lg shadow-lg w-[90%] sm:w-[50%] m-auto">
                <h3 className="text-lg font-bold text-center text-green-700 mb-4">
                  Selected Plan
                </h3>
                <p className="text-center text-gray-700 mb-2">
                  Operator: {selectedPlan.operator_name}
                </p>
                <p className="text-center text-gray-700 mb-2">
                  Amount: ₹{selectedPlan.mrp}
                </p>
                <p className="text-center text-gray-700 mb-2">
                  Validity: {selectedPlan.validity} days
                </p>
                <p className="text-center text-gray-700 mb-2">
                  Talktime: {selectedPlan.talktime} minutes
                </p>
                <p className="text-center text-gray-700 mb-2">
                  Data Benefits: {selectedPlan.data} GB
                </p>
                <p className="text-center text-gray-700">
                  Description: {selectedPlan.description}
                </p>

                <div className="sm:flex grid justify-center mt-6 sm:space-x-4">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 mb-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => {
                      setSelectedPlan(null);
                      setPlans(plans); // Optionally, you can refetch plans or keep them
                    }}
                  >
                    Change Plan
                  </button>

                  <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 px-4 rounded focus:outline-none focus:shadow-outline relative ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleRecharge}
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Proceed to Recharge"
                    )}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          // Recharge Success Message
          <div className="flex flex-col items-center justify-center bg-green-100 p-8 shadow-md mt-[150px] sm:mt-[70px] w-[90%] sm:w-[40%] m-auto rounded-xl">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Recharge Successful!
            </h3>
            <p className="text-center text-gray-700 mb-6">{rechargeResult}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={resetRecharge}
            >
              Recharge Again
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Recharge;
