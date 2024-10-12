import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWallet,
  faStar,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/auth';
import axios from 'axios';

const DashboardSection = () => {

   const [auth] = useAuth();
   const [user, setUser] = useState();
   const [users, setUsers] = useState([]);


   const getTeam = async() => {
     try {
        const userId = auth?.user?.id;
        console.log(auth);
        

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/get-team-list/${userId}`)
        console.log(res.data.data);
        setUsers(res.data.data);
        setUser(res.data.userMain);
     } catch (error) {
        console.log(error);
     }
   }


   useEffect(() => {
    if(auth?.token){
      getTeam();
    }
   },[auth])

  return (
    <div className={`${auth?.token ? "flex" : "hidden" } justify-between bg-white py-8 px-4  gap-x-4 h-[200px]`}>
      {/* Wallet Section */}
      <div className="bg-blue-900 text-white rounded-t-lg rounded-b-md p-4 text-center w-[45%] relative h-24">
        
        <h3 className="text-lg mb-4">Wallet</h3>
        <div className="text-3xl bg-white rounded-[50%] w-[60%] sm:w-[30%] m-auto mb-2">
          <FontAwesomeIcon icon={faWallet} size={"1x"} style={{color:"#000080"}}/>
          <p className="text-sm font-bold text-blue-900">Rs. {user?.rechargeWallet}</p>
        </div>
          <button className="mt-1 bg-orange-500 text-[12px] w-[111px] text-white py-1 px-6 rounded-full mb-2">Add Money</button>
      </div>

      {/* Reward Points Section */}
      {/* <div className="bg-blue-900 text-white rounded-t-lg rounded-b-md p-4 text-center w-1/4 relative">
        <div className="text-3xl mb-2">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <h3 className="text-lg">Reward Points</h3>
        <p className="text-3xl font-bold">10000.0</p>
        <div className="absolute inset-x-0 bottom-0">
          <button className="mt-4 bg-orange-500 text-white py-1 px-6 rounded-full mb-2">Redeem Rewards</button>
        </div>
      </div> */}

      {/* My Lead Section */}
      <div className="bg-blue-900 text-white rounded-t-lg rounded-b-md p-4 text-center w-[45%] relative h-24">
        
        <h3 className="text-lg mb-4">My Lead</h3>
        <div className="text-3xl bg-white rounded-[50%] w-[60%] sm:w-[30%] m-auto mb-2">
          <FontAwesomeIcon icon={faUsers} size={"1x"} style={{color:"#000080"}}/>
          <p className="text-sm font-bold text-blue-900">{users.length}</p>
        </div>
          <button className="mt-1 bg-orange-500 border border-orange-500 text-[12px] w-[111px] text-white py-1 px-6 rounded-full">Check Lead</button>
      </div>
    </div>
  );
};

export default DashboardSection;
