import React, { useState } from 'react';
import axios from 'axios';

const RefundOTP = () => {
  const [formData, setFormData] = useState({ transaction_id: '' });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/recharge/refund-otp`, formData);
      setResponse(res.data);
    } catch (error) {
      console.error('Error requesting refund OTP:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="transaction_id" placeholder="Transaction ID" onChange={handleChange} />
      <button type="submit">Request OTP</button>
      {response && <div>{JSON.stringify(response)}</div>}
    </form>
  );
};

export default RefundOTP;
