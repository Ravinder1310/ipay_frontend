import React from 'react'
import Layout from '../../components/Layout/Layout'
import { TypeAnimation } from 'react-type-animation';

const Services = () => {

    const allServices = [
        {
          icon: '📱',
          title: 'Mobile Prepaid',
          description: 'Top-up your mobile balance in a flash with I-pay',
        },
        {
          icon: '📞',
          title: 'Mobile Postpaid',
          description: 'Seamlessly settle your postpaid mobile bills hassle-free.',
        },
        {
          icon: '📡',
          title: 'DTH Recharge',
          description:
            'Recharge your DTH services effortlessly for uninterrupted entertainment.',
        },
        {
          icon: '💡',
          title: 'Pay Electricity Bills',
          description: 'Swiftly pay your electricity bills without the queues.',
        },
        {
          icon: '🛣️',
          title: 'FasTag Recharge',
          description:
            'Keep your journeys smooth by quickly recharging your Fastag.',
        },
        {
          icon: '⛽',
          title: 'Book a Cylinder',
          description: 'Order your gas cylinder with ease using I-pay.',
        },
        {
          icon: '💧',
          title: 'Water Bill',
          description: 'Effortlessly manage and pay your water bills.',
        },
        {
          icon: '📺',
          title: 'Cable TV Recharge',
          description:
            'Stay entertained by recharging your cable TV subscription effortlessly.',
        },
        {
          icon: '☎️',
          title: 'Landline Recharge',
          description: 'Settle your landline bills seamlessly with I-pay.',
        },
        {
          icon: '💳',
          title: 'Credit Card',
          description: 'Manage your credit card payments conveniently.',
        },
        {
          icon: '💰',
          title: 'Loan Repayment',
          description: 'Easily repay your loans through I-pay.',
        },
        {
          icon: '🧾',
          title: 'Municipal Tax',
          description:
            'Efficiently handle your municipal tax payments with I-pay.',
        },
        {
          icon: '📍',
          title: 'ATM Locator',
          description:
            'Locate nearby ATMs with the I-pay ATM locator feature.',
        },
        {
          icon: '🏍️',
          title: 'Bike Insurance',
          description: 'Secure your bike effortlessly with our insurance services.',
        },
        {
          icon: '🚗',
          title: 'Car Insurance',
          description: 'Protect your car with hassle-free insurance solutions.',
        },
        {
          icon: '👨‍👩‍👧‍👦',
          title: 'LIC Insurance',
          description:
            'Explore and manage your LIC insurance policies conveniently.',
        },
      ];


  return (
    <Layout>
    <div className='mb-20'>
        <img className='h-[250px] sm:h-full mt-16 sm:mt-0' src='/images/services2.png'/>
        <div className="flex items-center justify-center absolute top-[25%] left-[15%] sm:top-64 sm:left-[20%] bg-transparent text-white">
      <TypeAnimation
        sequence={[
          'Welcome to ZBAZAAR!', // Text to display
          2000, // Pause for 2 seconds
          'Your satisfaction is our priority!', // Next text
          2000, // Pause for 2 seconds
          'Feel free to reach out!', // Next text
          2000, // Pause for 2 seconds
          'We are here to assist you!', // Next text
          2000, // Pause for 2 seconds
          () => {
            console.log('Done typing!'); // Callback function after the last text
          },
        ]}
        speed={50} // Typing speed in ms
        wrapper="div" // HTML element to wrap the text
        className="sm:text-[60px] text-[20px] font-bold text-center text-white" // Tailwind CSS styles
        cursor={true} // Show blinking cursor
        repeat={Infinity} // Repeat the animation
      />
    </div>
    <div className='mt-14 w-[90%] m-auto'>
        <h1 className='font-bold text-4xl text-white'>Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transform transition duration-300 ease-in-out"
            >
              <div className="text-center text-2xl text-red-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
    </Layout>
  )
}

export default Services