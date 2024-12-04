import React from 'react'

const CardBody = ({name, address}) => {
  return (
    <>
        <div className='px-4 '>
            <h1 className='text-5xl font-semibold'>{name}</h1>
            <p className='px-2 mt-3 text-gray-600'>{address}</p>
        </div>

    </>
   
  )
}

export default CardBody