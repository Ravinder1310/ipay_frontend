import React from 'react'
import Layout from '../../components/Layout/Layout'

const Zoom = () => {
  return (
    <Layout>
    <div className='w-[100%] sm:w-[50%] pt-20 shadow-lg pb-4'>
        <img src='/images/abc.png' className='w-[100%]' alt='error'/>
        <div className=' shadow-lg shadow-gray-300 mb-10 p-8 w-[90%] m-auto mt-10'>
            <h1 className='text-xl font-bold'>Grow Business By I-Pay</h1>
            <h1 className='text-lg font-bold'>Zoom Meeting</h1>
            <div className="mt-10 w-[100%]">
            <table className="w-[100%] m-auto">
              <thead>
                <tr>
                  <th className="text-left ">Meeting ID:</th>
                  <th className="text-center text-sm">123456677</th>
                </tr>
                <tr>
                  <th className="text-left">Password:</th>
                  <th className="text-center text-sm">12345678</th>
                </tr>
                <tr>
                  <th className="text-left">Time:</th>
                  <th className="text-center text-sm">
                    08:00 PM Daily
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <button className='bg-blue-500 text-white font-bold w-[100%] mt-10 py-2 rounded-2xl'>Join Now</button><br/>
          <button className='bg-green-700 text-white font-bold w-[100%] mt-2 py-2 rounded-2xl'>Share Zoom Link</button>
        </div>

    </div>
    </Layout>
  )
}

export default Zoom