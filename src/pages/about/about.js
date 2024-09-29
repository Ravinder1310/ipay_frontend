import React from "react";
import Layout from "../../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About - Ipay"}>
      <div>
          <img className="w-full h-[300px] sm:h-[400px]" src="/images/recharge.png" alt="error" />
        <h1 className="mt-14 text-6xl font-bold">About Us</h1>
        <div className="w-[80%] m-auto mt-10 text-left mb-20">
          <h2 className="text-xl font-bold">About I-Pay</h2>
          <p className="mt-3 text-gray-500">
            At I-Pay, we believe in revolutionizing the way you engage with
            your finances. Our journey began with a simple yet ambitious goal:
            to create an all-encompassing platform that not only simplifies your
            everyday transactions but also opens doors to new opportunities for
            financial empowerment.
          </p>
          <h2 className="mt-6 text-xl font-bold">Our Vision</h2>
          <p className="mt-3 text-gray-500">
            We envision a world where financial interactions are seamless,
            transparent, and accessible to all. Our aim is to redefine
            convenience by offering a comprehensive suite of services that cater
            to your diverse needs, transforming mundane tasks like mobile
            recharges and bill payments into effortless experiences.
          </p>
          <h2 className="mt-6 text-xl font-bold">What We Offer</h2>
          <p className="mt-3 text-gray-500">
          I-Pay is your one-stop destination for mobile recharges, bill
            settlements, and beyond. But we're more than just a transactional
            platform. We introduce you to the world of personal finance
            management within an innovative, user-friendly interface. Through
            ethical practices and transparent financial tools, we aim to empower
            our users, allowing them to manage their finances, earn rewards, and
            participate in a community built on trust and integrity.
          </p>
          <h2 className="mt-6 text-xl font-bold">Our Commitment</h2>
          <p className="mt-3 text-gray-500">
            At the core of I-Pay lies a commitment to your privacy, security,
            and satisfaction. We employ stringent security measures,
            cutting-edge encryption, and industry-best practices to ensure that
            every transaction you make on I-Pay is safeguarded. Your trust in
            us is paramount, and we strive to exceed your expectations at every
            step.
          </p>
          <h2 className="mt-6 text-xl font-bold">Join Us</h2>
          <p className="mt-3 text-gray-500">
            Join the I-Pay community today and experience the fusion of
            convenience, innovation, and ethical business practices. Discover a
            platform that's not just about transactions, but about empowering
            you to take control of your financial journey with ease and
            confidence.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
