import React, { useState } from 'react';
import axios from 'axios';

const TransactionStatus = () => {
  const [formData, setFormData] = useState({
    transaction_id: '',
    client_id: '',
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/recharge/transaction-status`, formData);
      setResponse(res.data);
    } catch (error) {
      console.error('Error fetching transaction status:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Transaction Status</h2>
      <input name="transaction_id" placeholder="Transaction ID" onChange={handleChange} required />
      <input name="client_id" placeholder="Client ID" onChange={handleChange} required />
      <button type="submit">Check Status</button>
      {response && <div>{JSON.stringify(response)}</div>}
    </form>
  );
};

export default TransactionStatus;
