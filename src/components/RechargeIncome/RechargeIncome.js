import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";
import Layout from "../Layout/Layout";

const RechargeIncome = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  const [auth] = useAuth();
  const userId = auth?.user?.id;

  console.log("userID======>",userId)
  const getLevelIncome = async () => {
    console.log("getLevelIncome ======== hited==========")
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/recharge/recharge-income/${userId}`);
      setTransactions(result.data.data); // Make sure you're accessing the correct part of the response
    } catch (error) {
      console.error("Error fetching bot level income data: ", error);
    }
  };

  useEffect(() => {
    if (userId) {
      getLevelIncome();
    }
  }, [userId]);

  return (
    <Layout>
      <div className="flex pt-20 min-h-screen bg-gradient-to-b from-red-600 to-white">
        <div className="w-full p-1  bg-gradient-to-b from-red-600 to-white">
          <h2 className="text-3xl font-semibold text-white mb-6">Recharge Income List</h2>
          <div className="overflow-x-auto flex justify-center">
            <table className="text-sm w-[100%] bg-white border border-gray-300 rounded-lg shadow-md divide-y divide-gray-200">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="py-3 px-4 border-b text-center w-[110px]">S.No</th>
                  <th className="py-3 px-4 border-b text-center">FroUser</th>
                  {/* <th className="py-3 px-4 border-b text-left">Level</th> */}
                  <th className="py-3 px-4 border-b text-center">Amount</th>
                  <th className="py-3 px-4 border-b text-center">Profit</th>
                  <th className="py-3 px-4 border-b text-center">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions && transactions.length > 0 ? (
                  transactions.map((income, index) => (
                    <tr key={income._id} className="text-gray-700 hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{index + 1}</td>
                      <td className="py-2 px-4 border-b">{income.profitFrom}</td>
                      {/* <td className="py-2 px-4 border-b">{income.level}</td> */}
                      <td className="py-2 px-4 border-b">{income.amount}</td>
                      <td className="py-2 px-4 border-b">{income.profit}</td>
                      <td className="py-2 px-4 border-b">{new Date(income.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="py-2 px-4 border-b" colSpan="5">
                      No data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </Layout>
  );
};

export default RechargeIncome;
