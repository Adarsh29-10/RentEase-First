import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#373737] flex items-center justify-between px-7 py-4 shadow-lg shadow-red-200'>
        <div className='font-semibold text-[#fc8686]'>RentEase</div>
        <div><i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Header