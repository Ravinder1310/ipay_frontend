import React from "react";
import Layout from "../../components/Layout/Layout";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const QrCode = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="w-[98%] shadow-sm shadow-gray-300 pt-28 pb-10">
      <img src="/images/ban.png" className="w-[95%] m-auto h-[200px] sm:h-[400px]" alt="error"/>
      <img src="/images/qr.png" className="w-[75%]  m-auto mt-20 h-[300px] sm:h-[400px]" alt="error"/>
      <h1 className="mt-6 text-4xl font-bold">Scan & Transfer</h1>
      <h1 className=" text-xl font-bold">I Pay to I Pay wallet</h1>

      </div>
    </Layout>
  );
};

export default QrCode;
