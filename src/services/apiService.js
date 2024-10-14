import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5052/api/gateway',
});

// Register sender
export const registerSender = (mobile_no, fname, lname, pin) =>
  api.post('/sender/register', { mobile_no, fname, lname, pin });

// Verify sender OTP
export const verifySenderOtp = (mobile_no, otp) =>
  api.post('/sender/verify-otp', { mobile_no, otp });

// Register beneficiary
export const registerBeneficiary = (mobile_no, sender_profile_id, fname, lname, account_no, ifsc_code) =>
  api.post('/beneficiary/register', { mobile_no, sender_profile_id, fname, lname, account_no, ifsc_code });

// Fund transfer
export const fundTransfer = (mobile_no, sender_profile_id, beneficiary_id, amount, transfer_mode, account_no) =>
  api.post('/fund-transfer', { mobile_no, sender_profile_id, beneficiary_id, amount, transfer_mode, account_no });

// Get customer
export const getCustomer = (mobile_no) =>
  api.post('/customer', { mobile_no });
