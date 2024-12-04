import React from 'react'

const CardFooter = ({rooms, tenants}) => {
  return (
    <div className='flex items-center justify-evenly px-5 mt-5'>
        <div>
            <h1 className='text-[.9rem] font-medium text-gray-800'>Rooms: {rooms}</h1>
        </div>
        <div>
            <h1 className='text-[.9rem] font-medium text-gray-800'>Tenants: {tenants}</h1>
        </div>
    </div>
  )
}

export default CardFooter