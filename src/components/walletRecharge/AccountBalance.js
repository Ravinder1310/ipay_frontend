import React, { useState } from 'react';
import axios from 'axios';

const AccountBalance = () => {
  const [response, setResponse] = useState(null);

  const handleCheckBalance = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/recharge/account-balance`);
      setResponse(res.data);
    } catch (error) {
      console.error('Error fetching account balance:', error);
    }
  };

  return (
    <div>
      <h2>Account Balance</h2>
      <button onClick={handleCheckBalance}>Check Balance</button>
      {response && <div>{JSON.stringify(response)}</div>}
    </div>
  );
};

export default AccountBalance;
