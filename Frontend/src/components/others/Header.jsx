import React from 'react'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate();
  const handleProfileNavigate = () => {
    navigate('/profile')
  }
  const handleHomeNavigate = () => {
    navigate('/ownerDashboard')
  }
  return (
    <div className='bg-transparent flex items-center justify-between px-7 py-4  fixed w-full top-0 shadow bg-white'>
        <div className='font-semibold '>RentEase</div>
        {/* <div><i className="  fa-solid fa-bars"></i></div> */}
        <div className='flex gap-6'>
          
          <h2 className='text-gray-800 cursor-pointer' onClick={ handleHomeNavigate}>Home</h2>
          <h2 className='text-gray-800 cursor-pointer' onClick={ handleProfileNavigate}>Profile</h2>

        </div>
    </div>
  )
}

export default Header