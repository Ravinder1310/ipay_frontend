import React, { useState } from 'react';
import axios from 'axios';

const AddBeneficiary = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    account_no: '',
    ifsc_code: '',
    mobile_no: '',
    email: '',
    address1: '',
    pincode: '',
  });
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.fname) newErrors.fname = 'First name is required';
    if (!formData.lname) newErrors.lname = 'Last name is required';
    if (!formData.account_no) newErrors.account_no = 'Account number is required';
    if (!formData.ifsc_code) newErrors.ifsc_code = 'IFSC code is required';
    if (!formData.mobile_no || !/^\d{10}$/.test(formData.mobile_no)) newErrors.mobile_no = 'Valid 10-digit mobile number is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.address1) newErrors.address1 = 'Address is required';
    if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Valid 6-digit pincode is required';
    
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/recharge/add-beneficiary`, formData);
      setResponse(res.data);
    } catch (error) {
      console.error('Error adding beneficiary:', error);
      setResponse({ error: 'Failed to add beneficiary. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fname" placeholder="First Name" onChange={handleChange} />
      {errors.fname && <div style={{ color: 'red' }}>{errors.fname}</div>}

      <input name="lname" placeholder="Last Name" onChange={handleChange} />
      {errors.lname && <div style={{ color: 'red' }}>{errors.lname}</div>}

      <input name="account_no" placeholder="Account No" onChange={handleChange} />
      {errors.account_no && <div style={{ color: 'red' }}>{errors.account_no}</div>}

      <input name="ifsc_code" placeholder="IFSC code" onChange={handleChange} />
      {errors.ifsc_code && <div style={{ color: 'red' }}>{errors.ifsc_code}</div>}

      <input name="mobile_no" placeholder="Phone" onChange={handleChange} />
      {errors.mobile_no && <div style={{ color: 'red' }}>{errors.mobile_no}</div>}

      <input name="email" placeholder="Email" onChange={handleChange} />
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

      <input name="address1" placeholder="Address" onChange={handleChange} />
      {errors.address1 && <div style={{ color: 'red' }}>{errors.address1}</div>}

      <input name="pincode" placeholder="Pincode" onChange={handleChange} />
      {errors.pincode && <div style={{ color: 'red' }}>{errors.pincode}</div>}

      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Beneficiary'}
      </button>

      {response && <div>{JSON.stringify(response)}</div>}
    </form>
  );
};

export default AddBeneficiary;
