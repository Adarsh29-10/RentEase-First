import React from 'react'
import { useNavigate } from 'react-router-dom'
import ManageButton from '../ManageButton.jsx'
import DeleteButton from '../DeleteButton.jsx'
import BCardBody from './BCardBody.jsx'
import BCardFooter from './BCardFooter.jsx'
import BCardHeader from './BCardHeader.jsx'

const BCard = ({id, name, address, rooms, area, color, redirectTo}) => {

  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate(`/manage-rooms/${id}`)
  }

  return (
    <>
    
        <div className= {`relative w-[270px] h-[300px] bg-[#ffffff] backdrop-blur-2xl shadow-black shadow-md rounded-xl mt-5 mx-6  flex flex-col gap-4 flex-shrink-0 `}>
            <BCardHeader id={id} />
            <BCardBody name={name} address={address}/>
            <BCardFooter rooms={rooms} area={area}/>
            

            <ManageButton onClick={handleNavigate}/>
            {/* <DeleteButton /> */}
        </div>
    </>
  )
}

export default BCard


// bg-[#373737] card bg