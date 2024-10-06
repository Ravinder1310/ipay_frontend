// src/components/FundTransfer.js

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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/recharge/fund-transfer`, formData);
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>Fund Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Transfer Mode:</label>
          <input
            type="text"
            name="transfer_mode"
            value={formData.transfer_mode}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            name="account_no"
            value={formData.account_no}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Beneficiary ID:</label>
          <input
            type="text"
            name="beneficiary_id"
            value={formData.beneficiary_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Client ID:</label>
          <input
            type="number"
            name="client_id"
            value={formData.client_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Transfer'}
        </button>
      </form>

      {response && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid green' }}>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid red' }}>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default FundTransfer;
