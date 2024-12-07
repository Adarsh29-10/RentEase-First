import React from 'react'

const CardFooter = ({rooms, area}) => {
  return (
    <div className=' flex items-center justify-between px-6 mt-6  '>
        <div>
            <h1 className='text-[.9rem] font-medium text-black'>Area: {area}</h1>
        </div>
        <div>
            <h1 className=' text-[.9rem] font-medium text-black'>Rooms: {rooms}</h1>
        </div>
        
    </div>
  )
}

export default CardFooter

// text-[#E1E1E1] 