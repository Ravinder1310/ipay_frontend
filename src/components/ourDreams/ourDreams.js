import React from 'react'

const OurDreams = () => {
  return (
    <div className='w-[95%] rounded-lg m-auto mt-20 mb-10 p-3 sm:p-10 bg-white'>
      <h1 className='text-center font-bold text-3xl mb-10 mt-10 sm:mt-1'>Our Dreams</h1>
      <div className='flex flex-wrap justify-between gap-2 sm:gap-4'>
        <img className='w-full sm:w-[48%] lg:w-[23%] object-cover' src='/images/family.png' alt='error' />
        <img className='w-full sm:w-[48%] lg:w-[23%] object-cover' src='/images/bank.png' alt='error' />
        <img className='w-full sm:w-[48%] lg:w-[23%] object-cover' src='/images/car.png' alt='error' />
        <img className='w-full sm:w-[48%] lg:w-[23%] object-cover' src='/images/home.png' alt='error' />
      </div>
    </div>
  )
}

export default OurDreams
