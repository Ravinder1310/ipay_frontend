import React from "react";
import Layout from "../../components/Layout/Layout";

const Package = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-white font-bold text-4xl mt-10">
          Joining Packages
        </h1>
        <div className="flex flex-wrap justify-center gap-10 mt-20">
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 w-64 shadow-lg">
            <h2 className="text-white font-bold text-lg mb-4">SMART PACKAGE</h2>
            <div className="bg-white p-4 rounded-md mb-4">
              <img
                src="https://www.svgrepo.com/show/141364/ebook.svg"
                alt="e-book icon"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <div className="text-white font-bold text-4xl mb-2">699/-</div>
            <div className="text-white text-xl">E-BOOK</div>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 w-64 shadow-lg">
            <h2 className="text-white font-bold text-lg mb-4">PRIME PACKAGE</h2>
            <div className="bg-white p-4 rounded-md mb-4">
              <img
                src="https://www.svgrepo.com/show/141364/ebook.svg"
                alt="e-book icon"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <div className="text-white font-bold text-4xl mb-2">699/-</div>
            <div className="text-white text-xl">E-BOOK</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Package;
