import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-7 py-4 border-b-4 border-black '>
        <div className='font-semibold'>RentEase</div>
        <div><i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Header