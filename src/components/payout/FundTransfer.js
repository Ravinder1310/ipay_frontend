import React, { useState } from 'react';
import { fundTransfer } from '../../services/apiService';

const FundTransfer = () => {
  const [amount, setAmount] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [beneficiaryId, setBeneficiaryId] = useState('');
  const [transferMode, setTransferMode] = useState('IMPS');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Input validation
    if (!mobileNo || !beneficiaryId || !amount) {
      setMessage('Please fill out all fields.');
      return;
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }

    setLoading(true); // Set loading state to true

    try {
      // Log the request data before sending it
      console.log('Initiating fund transfer with the following details:', {
        mobileNo,
        beneficiaryId,
        amount,
        transferMode,
      });

      const response = await fundTransfer(mobileNo, 378672, beneficiaryId, amount, transferMode, '0197001700049536');
      console.log('Response from API:', response);

      if (response.error_code === "0") {
        setMessage('Fund transfer successful!');
      } else {
        setMessage(response.message || 'Transfer failed.');
      }
    } catch (error) {
      console.error('Error during fund transfer:', error.response ? error.response.data : error.message);
      setMessage(error.response ? error.response.data.error : error.message);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white mb-10 text-left">
      <h2 className="text-2xl font-semibold text-center mb-6">Fund Transfer</h2>
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
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="beneficiaryId">Beneficiary ID</label>
          <input
            type="text"
            id="beneficiaryId"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-200"
            value={beneficiaryId}
            onChange={(e) => setBeneficiaryId(e.target.value)}
            placeholder="Enter Beneficiary ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-200"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="transferMode">Transfer Mode</label>
          <select
            id="transferMode"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-200"
            value={transferMode}
            onChange={(e) => setTransferMode(e.target.value)}
          >
            <option value="IMPS">IMPS</option>
            <option value="NEFT">NEFT</option>
            <option value="RTGS">RTGS</option>
          </select>
        </div>
        <button 
          type="submit" 
          className={`w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300`}
        >
          {loading ? 'Transferring...' : 'Transfer'}
        </button>
        {message && <div className="mt-3 text-red-600">{message}</div>}
      </form>
    </div>
  );
};

export default FundTransfer;
