import React from 'react'

const MainTransfer = () => {
  return (
    <div className='w-[90%] m-auto mt-10'>
        <h1 className='text-left mb-3 text-2xl font-bold'>Money Transfer</h1>
        <div className='flex flex-wrap border-2 rounded-lg gap-2 bg-white shadow-2xl justify-between p-4'>
    <div className='hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer'>
        <img className='w-[100px] h-[60px]' src='/images/add.png' alt='error'/>
        <h4>Add Money</h4>
    </div>
    <div className='hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer'>
        <img className='w-[100px] h-[60px]' src='/images/send.png' alt='error'/>
        <h4>Send Money</h4>
    </div>
    <div className='hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer'>
        <img className='w-[100px] h-[60px]' src='/images/scan.png' alt='error'/>
        <h4>Scan to pay</h4>
    </div>
    <div className='hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer'>
        <img className='w-[100px] h-[60px]' src='/images/upi.png' alt='error'/>
        <h4>Pay to UPI</h4>
    </div>
    <div className='hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer'>
        <img className='w-[100px] h-[60px]' src='/images/redeem.png' alt='error'/>
        <h4>Redeem Money</h4>
    </div>
    <div className='hover:bg-gray-200 p-2 rounded-lg hover:cursor-pointer'>
        <img className='w-[100px] h-[60px]' src='/images/upi.png' alt='error'/>
        <h4>Add UPI Cash</h4>
    </div>
</div>

    </div>
  )
}

export default MainTransfer