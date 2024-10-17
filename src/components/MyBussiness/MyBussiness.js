import React, { useEffect, useState } from 'react';
import border from './Images/frame-card.png';
import './MyBussiness.css';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Layout from '../Layout/Layout';

function MyBusiness() {
    const [user, setUser] = useState({});
    const [auth] = useAuth();
    const navigate = useNavigate();
  
    const getUser = async () => {
      const id = auth?.user?.id;
      const token = auth?.token;
  
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/profile/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (res && res.data) {
          setUser(res.data);
          console.log(res.data);
        } else {
          toast("Failed to retrieve user profile");
        }
      } catch (error) {
        console.log(error);
        toast("Something went wrong");
      }
    };
  
    useEffect(() => {
      getUser();
    }, []);

  return (
    <Layout>

    <div className="flex flex-col justify-center items-center py-4 pt-24">
      <div className="text-center w-[60%] shadow-slate-400 border border-black m-2 rounded-lg shadow-2xl h-fit grid place-items-center">
        <div className="text-center text-3xl text-red-600 font-extrabold">I Pay</div>
        <div className="w-20 h-20 overflow-hidden rounded-full bg-slate-500 border-2 border-red-600">
          <img className="" src={require('./Images/profilepic.jpg')} alt="Profile" />
        </div>
        <div className="text-xl font-bold">{user.userName}</div>
        <div className="font-bold text-gray-600">User ID: {user.referralCode}</div>
        <div className="font-bold text-gray-600">Mobile: {user.mobileNumber}</div>
        <div className="font-bold text-gray-600">Status: {user.active ? "Recharged" : "Free"}</div>
        <div className="font-bold text-gray-600">Date: {new Date(user.createdAt).toLocaleDateString('en-CA')}</div>
        <div
          className="w-full h-16 rounded-lg"
          style={{ backgroundImage: `url(${border})`, backgroundSize: 'cover' }}
        ></div>
      </div>

      <div className="flex justify-between mb-4 shadow-2xl shadow-slate-400 w-[90%] mt-4 py-4 px-2 rounded-lg">
        <div className="text-green-500 border-r-2 w-[50%] border-black text-center">
          <div className="font-bold">Team Income</div>
          <div className="text-xl font-bold">{user.teamIncome}</div>
        </div>
        <div className="text-red-600 w-[50%] text-center">
          <div className="font-bold">Today Earning</div>
          <div className="text-xl font-bold">{user.todayEarning}</div>
        </div>
      </div>

      <div className="flex bg-red-900 shadow-slate-400 text-white justify-between mb-4 shadow-2xl w-[90%] p-4 rounded-lg">
        <div className="border-r-2 w-[50%] border-white text-center">
          <div className="font-bold">Referral Code</div>
          <div className="text-xl font-bold">{user.referralCode}</div>
        </div>
        <div className="w-[50%] text-center">
          <div className="font-bold">Referred By</div>
          <div className="text-xl font-bold">{user.referredBy ? user.referredBy : ""}</div>
        </div>
      </div>

      <div className="flex bg-red-900 text-white justify-between mb-4 shadow-2xl w-[90%] p-1 rounded-lg">
        <div className="flex gap-2">
          <div className="flex gap-1 text-sm text-center  p-2 rounded">
            <div className='text-2xl'>
            📢
            </div>
            <div style={{ width: 'calc(100% - 24px)', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <p style={{
                fontWeight: 'bold',
                display: 'inline-block',
                paddingLeft: '100%',
                animation: 'marquee 10s linear infinite',
                whiteSpace: 'nowrap'
              }} className='text-xl grid place-content-center'>
                Welcome to Customer Support! Call: 12345677432
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-4 w-[90%] p-4 rounded-lg">
        <div className="w-[45%] shadow-2xl shadow-slate-400 text-red-600 text-center p-4 rounded-lg">
          {user.earningWallet} <br /> Earning Wallet
        </div>
        <div className="w-[45%] shadow-2xl shadow-slate-400 text-red-600 text-center p-4 rounded-lg">
          {user.rechargeWallet}<br /> Recharge Wallet
        </div>
      </div>

      <div className="flex justify-between mb-4 w-full rounded-lg">
        <div className="m-2 w-[30%]  shadow-xl shadow-slate-400 text-red-600 text-center p-4 rounded-lg">
          {user.business} <br /> Bussiness
        </div>
        <div className="m-2 w-[30%] shadow-xl shadow-slate-400 text-red-600 text-center p-4 rounded-lg">
          {user.totalEarning} <br /> Total Earning
        </div>
        <div className="m-2 w-[30%] shadow-xl shadow-slate-400 text-red-600 text-center p-4 rounded-lg">
          {user.teamIncome} <br /> Team Income
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(-100%);
            }
          }
          `}
      </style>
    </div>
          </Layout>
  );
}

export default MyBusiness;
