import React, { useState } from 'react';
import axios from 'axios';

const FundTransfer = () => {
  const [formData, setFormData] = useState({
    transfer_mode: 'IMPS',
    account_no: '',
    amount: '',
    beneficiary_id: '',
    client_id: '',
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/recharge/fund-transfer`, formData);
      setResponse(res.data);
    } catch (error) {
      console.error('Error initiating fund transfer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="account_no" placeholder="Account Number" onChange={handleChange} />
      <input name="amount" placeholder="Amount" type="number" onChange={handleChange} />
      {/* Other input fields */}
      <button type="submit">Transfer Funds</button>
      {response && <div>{JSON.stringify(response)}</div>}
    </form>
  );
};

export default FundTransfer;
