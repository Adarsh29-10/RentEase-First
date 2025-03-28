import React from 'react'
import { useNavigate } from 'react-router-dom'

const ManageButton = ({onClick}) => {

  

  return (
    <button 
      onClick={onClick}
      className='absolute w-full bg-black text-white rounded  bottom-0 p-2.5  overflow-hidden rounded-b-xl'>Manage</button>
  )
}

export default ManageButton