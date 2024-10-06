import React, { useState } from 'react';
import axios from 'axios';

const IFSCDetails = () => {
  const [formData, setFormData] = useState({ ifsc_code: '' });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/recharge/ifsc-details`, formData);
      setResponse(res.data);
    } catch (error) {
      console.error('Error fetching IFSC details:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>IFSC Details</h2>
      <input name="ifsc_code" placeholder="IFSC Code" onChange={handleChange} required />
      <button type="submit">Get IFSC Details</button>
      {response && <div>{JSON.stringify(response)}</div>}
    </form>
  );
};

export default IFSCDetails;
