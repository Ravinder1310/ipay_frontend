import React from "react";

const ChooseUs = () => {
  return (
    <div className="flex flex-wrap mt-10 w-[90%] m-auto rounded-lg">
      <div className="w-full md:w-[50%] bg-white  p-2 rounded-tr-lg rounded-tl-lg rounded-br-lg rounded-bl-lg sm:p-10 sm:rounded-tl-lg sm:rounded-bl-lg">
        <h1 className="text-5xl font-bold mt-10">Why Choose Us</h1>
        <p className="mt-10 text-gray-400">
          Effortless transactions and innovative solutions, backed by a
          customer-centric approach that makes your financial experience with us
          unparalleled
        </p>
        <div className="flex flex-wrap mt-20 gap-y-20 sm:gap-y-10">
          <div className="sm:flex text-center sm:w-full w-1/2  md:w-1/2 justify-center gap-4 items-center">
            <img className="w-20 h-20 m-auto sm:m-0" src="/images/security.png" alt="error" />
            <div>
              <p className="text-red-700 mt-3 sm:mt-0">Trusted</p>
              <h2 className="text-lg font-bold">Security</h2>
            </div>
          </div>
          <div className="sm:flex sm:w-full w-1/2 md:w-1/2 justify-center gap-4 items-center">
            <img className="w-20 h-20 m-auto sm:m-0" src="/images/services.png" alt="error" />
            <div>
              <p className="text-red-700 mt-3 sm:mt-0">Quality</p>
              <h2 className="text-lg font-bold">Services</h2>
            </div>
          </div>
          <div className="sm:flex sm:w-full w-1/2 md:w-1/2 justify-center gap-4 items-center">
            <img className="w-20 h-20 m-auto sm:m-0" src="/images/system.png" alt="error" />
            <div>
              <p className="text-red-700 mt-3 sm:mt-0">Smart</p>
              <h2 className="text-lg font-bold">Systems</h2>
            </div>
          </div>
          <div className="sm:flex sm:w-full w-1/2 md:w-1/2 justify-center gap-4 items-center">
            <img className="w-20 h-20 m-auto sm:m-0" src="/images/support.png" alt="error" />
            <div>
              <p className="text-red-700 mt-3 sm:mt-0">24/7 Hours</p>
              <h2 className="text-lg font-bold">Support</h2>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full hidden sm:block md:w-[50%] h-[560px] rounded-tr-lg rounded-br-lg object-cover"
        src="/images/why.png"
        alt="error"
      />
    </div>
  );
};

export default ChooseUs;
