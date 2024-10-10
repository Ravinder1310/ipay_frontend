import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth';

const TopNav = () => {

 const navigate = useNavigate();
 const [auth, setAuth] = useAuth();

  return (
    <div className= {`hidden ${auth?.token ? `md:hidden` : "md:flex"} md:flex bg-blue-900 text-white mt-[64px] justify-between pl-4 pr-6 pt-2 pb-2`}>
      <div className='flex gap-10'>
        <div className='flex items-center gap-4'>
          <img src='/images/loc.png' className='w-10 h-10' alt='error' />
          <p>Kunj, Ganga Bihar Colony, Etawah - 206001</p>
        </div>
        <div className='flex items-center gap-2'>
          <img src='/images/mail.png' className='w-12 h-12' alt='error' />
          <p>info@ipay.com</p>
        </div>
      </div>
      <div className='flex gap-10'>
        <button  onClick={() => {navigate("/login")}} className='bg-orange-400 text-whit font-bold w-[100px] rounded-full hover:bg-yellow-400 '>
          Login
        </button>
        <button  onClick={() => {navigate("/signup")}} className='bg-white text-black font-bold w-[100px] rounded-full hover:bg-yellow-400'>
          Register
        </button>
      </div>
    </div>
  )
}

export default TopNav
