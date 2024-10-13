import React from "react";
import { useAuth } from "../../context/auth";

const FeaturesSection = () => {

 const [auth] = useAuth();

  return (
    <div className={`${auth?.token ? "hidden":"bg-white w-[90%] m-auto mt-20 rounded-lg text-white py-12"}`}>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="text-center bg-gradient-to-r bg-black p-6">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75V3m0 0a9 9 0 019 9v3.75M12 3a9 9 0 00-9 9v3.75M21 16.5h-4.5m0 0a3 3 0 00-6 0m0 0H3M21 16.5V19.5A1.5 1.5 0 0119.5 21H4.5A1.5 1.5 0 013 19.5v-3M3 16.5h4.5"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Innovative Model</h3>
          <p className="text-white font-bold">
            Elevate your financial game through our innovative model.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center bg-gradient-to-r bg-black p-6">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M12 3v7m0 4v7M9 21H6a1.5 1.5 0 01-1.5-1.5V19M18 21h-3a1.5 1.5 0 01-1.5-1.5V19"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Seamless Transaction Experience</h3>
          <p className="text-white font-bold">
            Recharge, pay bills, and manage finances effortlessly within a few taps.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center bg-gradient-to-r bg-black p-6">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 12h9m-9 4.5h9M15 5.25h.008v.008H15V5.25zM9 5.25h.008v.008H9V5.25z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Robust Security Measures</h3>
          <p className="text-white font-bold">
            Enjoy peace of mind with industry-standard encryption for secure transactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
