import React, { useState } from 'react';
import axios from 'axios';

const RechargeForm = () => {
    const [formData, setFormData] = useState({
        username: 'APIRA6478033',
        pwd: '766269',
        operatorcode: '',
        number: '',
        amount: '',
        client_id: ''
    });
    
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/recharge/recharge`, formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error processing recharge");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Mobile Recharge</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 text-left">
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="operatorcode">
                        Operator Code
                    </label>
                    <select
                        name="operatorcode"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleChange}
                        value={formData.operatorcode} // set the value of the select
                    >
                        <option value="">Select Operator</option>
                        <option value="MAL">Airtel</option>
                        <option value="MJL">Jio</option>
                        <option value="MVL">Vi</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                        Mobile Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="number"
                        placeholder="Enter mobile number"
                        onChange={handleChange}
                        value={formData.number}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="amount"
                        placeholder="Enter recharge amount"
                        onChange={handleChange}
                        value={formData.amount}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client_id">
                        Client ID
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="client_id"
                        placeholder="Enter your client ID"
                        onChange={handleChange}
                        value={formData.client_id}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {message && (
                <p className={`mt-4 text-center font-semibold ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default RechargeForm;
