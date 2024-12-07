import React from 'react'

const CardBody = ({name, address}) => {
  return (
    <>
        <div className='px-4 '>
            <h1 className='text-5xl font-semibold text-black'>{name}</h1>
            <p className='px-2 mt-3 text-black'>{address}</p>
        </div>

    </>
   
  )
}

export default CardBody

// text-[#E1E1E1] address