import React from 'react'
import RoomCardHeader from './RoomCardHeader.jsx'
import RoomCardBody from './RoomCardBody.jsx'
import RoomCardFooter from './RoomCardFooter.jsx'
import ManageButton from '../ManageButton.jsx'

const RCard = ({color = 'bg-[#ffff]' ,roomNo , name ,contact , tStatus , bill, empty}) => {

  return (
    
    <>
      <div className={`relative w-[280px] h-[300px] ${color} shadow-black shadow-md rounded-xl mt-5 mx-6 pt-5 flex flex-col`}>
            <RoomCardHeader roomNo={roomNo}  />
            <RoomCardBody name={name} contact={contact} tStatus={tStatus} bill={bill}/>
            <RoomCardFooter  />
            <ManageButton />
        </div>
    </>
    
  )
}

export default RCard