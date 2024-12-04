import React from 'react'
import Card from './Card'
import AddNewRoomCard from './AddNewRoomCard'
import RoomCard from './RoomCard'

const RoomList = () => {
  return (
    <div className=' px-5 py-6 mx-7 flex overflow-hidden border-2 border-black rounded-xl'>
        <RoomCard />
        {/* <Card name="Room 1"/>
        <Card name="Room 2"/> */}
        

        <AddNewRoomCard />
    </div>
  )
}

export default RoomList