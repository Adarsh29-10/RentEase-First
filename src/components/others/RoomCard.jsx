import React from 'react'
import RoomCardHeader from './RoomCardHeader'
import CardBody from './CardBody'
import RoomCardFooter from './RoomCardFooter'
import ManageButton from './ManageButton'

const RoomCard = () => {
  return (
    <div className='w-[300px] h-[200px] bg-pink-200 rounded-xl mt-5 mx-6 flex flex-col'>
        <RoomCardHeader />
        <CardBody name="Room1"/>
        <RoomCardFooter roomNo="10" tStatus="Family"/>

        <ManageButton />
    </div>
  )
}

export default RoomCard