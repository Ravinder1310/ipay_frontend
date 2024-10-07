import React, { useState } from 'react';
import { verifySenderOtp } from '../../services/apiService';

const OTPVerification = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await verifySenderOtp(mobileNo, otp);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="Mobile No" />
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
      <button type="submit">Verify OTP</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default OTPVerification;
