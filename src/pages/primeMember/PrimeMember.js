import React from "react";
import Layout from "../../components/Layout/Layout";

const PrimeMembershipCard = () => {


    const trapezoidStyle = {
        width: '100%',
        height: '0',
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderTop: '50px solid red',
      };

  return (
    <Layout>
    <div className="w-[100%] pt-16 border-4 border-red-600 rounded-lg bg-white shadow-lg m-auto">
      {/* Top Red Banner with "PRIME MEMBERSHIP" */}
      <div style={trapezoidStyle}></div>
      <div className="bg-red-600 w-[90%] m-auto mt-4 rounded-2xl p-3 flex justify-center items-center">
        <h1 className="text-white font-bold text-2xl">PRIME MEMBERSHIP</h1>
      </div>

      {/* Content Area */}
      <div className="p-4">
        <ul className="space-y-4">
          {/* List Items */}
          {[
            { icon: "💸", text: "GET 1299/- BONUS ON REGISTRATION" },
            { icon: "📲", text: "GET 8.5% ON MOBILE RECHARGE" },
            { icon: "🏠", text: "EXTRA 1/- CASHBACK ON TRANSACTIONS" },
            { icon: "💰", text: "ATTOT BANDHAN + FINANCIAL SUPPORT" },
            { icon: "🛒", text: "CASHBACK ON DAILY NEED SHOPPING" },
            { icon: "⚙️", text: "UTILITY + BBPS CASHBACK" },
            { icon: "🏷️", text: "DISCOUNT ON AMAZON FLIPKART MEESHO" },
            { icon: "🛍️", text: "CASHBACK ON ZBAZAAR SHOPPING" },
            { icon: "📝", text: "NOMINEE FACILITIES" },
            { icon: "📈", text: "FIXED MONTHLY INCENTIVE" },
            { icon: "🏠", text: "ELIGIBLE FOR ALL INCOMES" },
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="text-xl mr-3">{item.icon}</span>
              <span className="text-[12px] font-bold">{item.text}</span>
            </li>
          ))}
        </ul>

        {/* eBook Button at the Bottom */}
        <div className="mt-6 flex justify-center">
          <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center">
            <span className="mr-2">📘</span> eBook
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default PrimeMembershipCard;
