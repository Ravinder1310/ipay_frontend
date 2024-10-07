import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Package = () => {
  const navigate = useNavigate();

  const pack1 = {
    package_Id:"SMART001",
    name: "Smart Package",
    price: "₹699",
    des: "E-Book",
    direct_ref_comission: "₹200",
    b_capping: "₹700",
    img: "/images/ebook.png",
  };

  const pack2 = {
    package_Id:"PRIME002",
    name: "Prime Package",
    price: "₹1299",
    des: "E-Book Bundle",
    direct_ref_comission: "₹500",
    b_capping: "₹1300",
    img: "/images/ebook_bundle.png",
  };

  return (
    <Layout>
      <div className="py-10">
        <h1 className="text-white font-bold text-4xl mt-10">Joining Packages</h1>
        <div className="flex flex-wrap justify-center gap-10 mt-20">
          {/* SMART PACKAGE */}
          <div className="flex flex-col border-4 border-white items-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 rounded-lg p-6 w-80 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black opacity-10 pointer-events-none"></div>
            <h2 className="text-white font-bold text-lg mb-4 drop-shadow-lg">SMART PACKAGE</h2>
            <div className="bg-white p-4 rounded-md mb-4 shadow-xl transform hover:rotate-3 transition-all duration-500">
              <img
                src="/images/ebook.png"
                alt="e-book icon"
                className="w-36 h-36 mx-auto transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="text-white font-bold text-4xl mb-2 drop-shadow-lg">₹699/-</div>
            <div className="text-white text-xl drop-shadow-md mb-4">E-BOOK</div>
            <button
              onClick={() => navigate("/users/user/package-details", { state: { data: pack1 } })}
              className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full shadow-lg transform hover:translate-y-1 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              Proceed
            </button>
          </div>

          {/* PRIME PACKAGE */}
          <div className="flex flex-col border-4 border-white items-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 rounded-lg p-6 w-80 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black opacity-10 pointer-events-none"></div>
            <h2 className="text-white font-bold text-lg mb-4 drop-shadow-lg">PRIME PACKAGE</h2>
            <div className="bg-white p-4 rounded-md mb-4 shadow-xl transform hover:rotate-3 transition-all duration-500">
              <img
                src="/images/ebook_bundle.png"
                alt="e-book bundle icon"
                className="w-36 h-36 mx-auto transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="text-white font-bold text-4xl mb-2 drop-shadow-lg">₹1299/-</div>
            <div className="text-white text-xl drop-shadow-md mb-4">E-BOOK BUNDLE</div>
            <button
              onClick={() => navigate("/users/user/package-details", { state: { data: pack2 } })}
              className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full shadow-lg transform hover:translate-y-1 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Package;
