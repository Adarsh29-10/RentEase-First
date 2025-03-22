import React from 'react'

const Header = () => {
  return (
    <div className='bg-transparent flex items-center justify-between px-7 py-4  fixed w-full top-0 shadow bg-white'>
        <div className='font-semibold '>RentEase</div>
        <div><i className="  fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Header