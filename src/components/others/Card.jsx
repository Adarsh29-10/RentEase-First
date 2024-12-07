import React from 'react'
import CardHeader from './CardHeader.jsx'
import CardBody from './CardBody.jsx'
import CardFooter from './CardFooter.jsx'
import ManageButton from './ManageButton.jsx'
import DeleteButton from './DeleteButton.jsx'

const Card = ({name, address, rooms, area, color}) => {
  return (
    <>
        <div className= {`relative w-[270px] h-[300px] bg-[#FC9E6A] rounded-xl mt-5 mx-6  flex flex-col gap-4 shrink-0`}>
            <CardHeader />
            <CardBody name={name} address={address}/>
            <CardFooter rooms={rooms} area={area}/>

            <ManageButton />
            {/* <DeleteButton /> */}
        </div>
    </>
  )
}

export default Card


// bg-[#373737] card bg