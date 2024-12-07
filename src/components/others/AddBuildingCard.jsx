import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddBuildingCard = () => {

  const navigate = useNavigate()
  const handelDivClick = ()=>{
    navigate('/add-new-property')
  }

  return (
    <div 
    onClick={handelDivClick}
    className='w-[270px] h-[260px] rounded-xl mt-5 mx-6 p-1 flex justify-center items-center flex-col bg-[#1D1D1D] text-[#E1E1E1] shrink-0'>

        <i className="fa-solid fa-plus text-7xl opacity-0.1"></i>
        <p className='text-xl text-[#E1E1E1]'>Add New Building</p>
    </div> 
    
  )
}

export default AddBuildingCard