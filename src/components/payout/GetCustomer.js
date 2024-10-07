import React, { useState } from 'react';
import { getCustomer } from '../../services/apiService';

const GetCustomer = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [customerData, setCustomerData] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    try {
      const response = await getCustomer(mobileNo);
      console.log('Response from API:', response);

      if (response.error_code === "0") {
        setCustomerData(response.sender_data); // Store sender data in state
        setMessage('Customer details retrieved successfully!');
      } else {
        setMessage(response.message);
        setCustomerData(null); // Clear customer data on error
      }
    } catch (error) {
      console.error('Error during fetching customer data:', error.response ? error.response.data : error.message);
      setMessage(error.response ? error.response.data.error : error.message);
      setCustomerData(null); // Clear customer data on error
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Get Customer Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="mobileNo">Mobile No</label>
          <input
            type="text"
            id="mobileNo"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-200"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            placeholder="Enter Mobile No"
            maxLength={10}
          />
        </div>
        <button 
          type="submit" 
          className={`w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300`}
        >
          {loading ? 'Fetching...' : 'Get Customer'}
        </button>
        {message && <div className="mt-3 text-red-600">{message}</div>}
      </form>

      {customerData && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Customer Details:</h3>
          <p><strong>First Name:</strong> {customerData.sender_fname}</p>
          <p><strong>Last Name:</strong> {customerData.sender_lname}</p>
          <p><strong>Profile ID:</strong> {customerData.sender_profile_id}</p>
          <p><strong>Mobile No:</strong> {customerData.sender_mobile_no}</p>
          <p><strong>Pincode:</strong> {customerData.sender_pincode}</p>
        </div>
      )}
    </div>
  );
};

export default GetCustomer;
