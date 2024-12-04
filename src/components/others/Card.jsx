import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import ManageButton from './ManageButton'

const Card = ({name, address, rooms, tenants, color}) => {
  return (
    <>
        <div className= {`w-[300px] h-[200px] bg-gray-200 rounded-xl mt-5 mx-6  flex flex-col shrink-0`}>
            <CardHeader />
            <CardBody name={name} address={address}/>
            <CardFooter rooms={rooms} tenants={tenants}/>

            <ManageButton />
        </div>
    </>
  )
}

export default Card