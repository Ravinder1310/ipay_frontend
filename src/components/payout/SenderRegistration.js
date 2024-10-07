import React, { useState } from 'react';
import { registerSender } from '../../services/apiService';

const SenderRegistration = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerSender(mobileNo, fname, lname, pin);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="Mobile No" />
      <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="First Name" />
      <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last Name" />
      <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="PIN Code" />
      <button type="submit">Register Sender</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SenderRegistration;
