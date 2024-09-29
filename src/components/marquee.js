import React from 'react';

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-orange-500 text-white h-10 flex items-center">
      <div className="inline-block animate-marquee">
        <p className="text-lg font-bold">
          Pay your pending bills | Mobile Recharge | DTH Recharge | Electric Bill | Gas Recharge | Piped Gas Bill | Water Bill | Loan & EMI.
        </p>
      </div>
    </div>
  );
};

export default Marquee;
