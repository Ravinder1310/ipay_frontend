import React, { useState } from 'react';
import { registerBeneficiary } from '../../services/apiService';
import Layout from '../Layout/Layout';

const BeneficiaryRegistration = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [senderProfileId, setSenderProfileId] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!mobileNo || !senderProfileId || !fname || !lname || !accountNo || !ifscCode) {
      setMessage('Please fill out all fields.');
      return;
    }

    if (mobileNo.length !== 10) {
      setMessage('Mobile No must be 10 digits.');
      return;
    }

    setLoading(true); // Set loading state to true

    try {
      console.log('Registering Beneficiary with the following details:', {
        mobileNo,
        senderProfileId,
        fname,
        lname,
        accountNo,
        ifscCode,
      });

      const response = await registerBeneficiary(mobileNo, senderProfileId, fname, lname, accountNo, ifscCode);
      console.log('Response from API:', response);

      if (response.error_code === "0") {
        setMessage('Beneficiary registered successfully!');
      } else {
        setMessage(response.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Error during beneficiary registration:', error.response ? error.response.data : error.message);
      setMessage(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <Layout>
      <div className="w-[90%] sm:w-[30%] mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white mb-10 text-left">
        <h2 className="text-2xl font-semibold text-center mb-6">Register Beneficiary</h2>
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="senderProfileId">Sender Profile ID</label>
            <input
              type="text"
              id="senderProfileId"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-200"
              value={senderProfileId}
              onChange={(e) => setSenderProfileId(e.target.value)}
              placeholder="Enter Sender Profile ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-200"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Enter First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-200"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Enter Last Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="accountNo">Account No</label>
            <input
              type="text"
              id="accountNo"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-200"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
              placeholder="Enter Account No"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="ifscCode">IFSC Code</label>
            <input
              type="text"
              id="ifscCode"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-200"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              placeholder="Enter IFSC Code"
            />
          </div>
          <button 
            type="submit" 
            className={`w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300`}
          >
            {loading ? 'Registering...' : 'Register Beneficiary'}
          </button>
          {message && <div className="mt-3 text-red-600">{message}</div>}
        </form>
      </div>
    </Layout>
  );
};

export default BeneficiaryRegistration;
