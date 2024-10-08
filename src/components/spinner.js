import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout/Layout";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(4);
  const navigate = useNavigate();
  const location = useLocation("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevVal) => --prevVal);
    }, 1000);

    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <Layout>
      <div className="text-center bg-[#1d1f38] h-screen pt-28">
        <img
        className="m-auto"
          width={"300px"}
          src="/images/spiral.gif"
        />
      </div>
    </Layout>
  );
};

export default Spinner;
