import React, { useState } from 'react';
import axios from 'axios';

const Plans = () => {
    const [operatorcode, setOperatorCode] = useState('');
    const [plans, setPlans] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Username and password set manually
    const username = 'APIRA6478033';
    const pwd = '766269';

    const fetchPlans = async () => {
        setErrorMessage(''); // Clear any previous errors
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/recharge/get-plans`, {
                username, 
                pwd, 
                operatorcode
            });
            if (response.data.plan && response.data.plan.length > 0) {
                setPlans(response.data.plan);
            } else {
                setErrorMessage("No plans available for the selected operator.");
                setPlans([]);
            }
        } catch (error) {
            setErrorMessage("Error fetching plans. Please try again.");
            console.error("Error fetching plans", error);
        }
    };

    return (
        <div className="w-full mx-auto mt-20">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Check Available Plans</h2>

            <div className="mb-6 flex flex-col justify-center space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
                <input
                    type="text"
                    placeholder="Operator Code (e.g., Airtel)"
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={operatorcode}
                    onChange={(e) => setOperatorCode(e.target.value)}
                />
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={fetchPlans}
                >
                    Get Plans
                </button>
            </div>

            {errorMessage && (
                <p className="text-red-500 text-center font-semibold mb-4">{errorMessage}</p>
            )}

            <ul className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10">
                {plans.length > 0 ? (
                    plans.map((plan, index) => (
                        <li key={index} className="mb-4 p-4 bg-gray-100 rounded shadow-md">
                            <p className="font-bold">{plan.operator_name}</p>
                            <p className="text-gray-600">MRP: ₹{plan.mrp}</p>
                            <p className="text-gray-500">{plan.description}</p>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-600 text-center">No plans to display</p>
                )}
            </ul>
        </div>
    );
};

export default Plans;
