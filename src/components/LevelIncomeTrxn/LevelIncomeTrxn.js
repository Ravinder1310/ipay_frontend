import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";
import Layout from "../Layout/Layout";

const LevelIncomeTrxn = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  const [auth] = useAuth();
  const userId = auth?.user?.id;

  const getLevelIncome = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/user/level-income/${userId}`);
      setTransactions(result.data.data); // Ensure the correct response structure is used
    } catch (error) {
      console.error("Error fetching bot level income data: ", error);
    }
  };

  useEffect(() => {
    getLevelIncome();
  }, []);

  return (
    <Layout>
      <div className="flex pt-28 min-h-screen bg-gradient-to-b from-green-400  justify-center to-blue-500">
        <div className="w-full sm:w-[50%] p-6 ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Level Income List</h2>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full text-sm bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="py-3 px-4 border-b text-center w-[50px]">S.No</th>
                  <th className="py-3 px-4 border-b text-center">From User</th>
                  <th className="py-3 px-4 border-b text-center">Amount</th>
                  <th className="py-3 px-4 border-b text-center">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions && transactions.length > 0 ? (
                  transactions.map((income, index) => (
                    <tr key={income._id} className="text-gray-700 hover:bg-gray-50">
                      <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                      <td className="py-2 px-4 border-b">{income.fromUser}</td>
                      <td className="py-2 px-4 border-b text-center">${income.amount}</td>
                      <td className="py-2 px-4 border-b text-center">
                        {new Date(income.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="py-2 px-4 border-b text-center" colSpan="4">
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

export default LevelIncomeTrxn;
