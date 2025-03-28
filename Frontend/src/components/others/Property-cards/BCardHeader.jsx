import React from 'react'

const BCardHeader = ({id}) => {
  return (
    <div className='text-black flex items-center justify-end px-4  py-3 '>
        <p>{id}</p>
        <i class="fa-solid fa-bars"></i>
    </div>
  )
}

export default BCardHeader