import React from 'react'

import ManageButton from '../ManageButton.jsx'
import DeleteButton from '../DeleteButton.jsx'
import BCardBody from './BCardBody.jsx'
import BCardFooter from './BCardFooter.jsx'
import BCardHeader from './BCardHeader.jsx'

const BCard = ({name, address, rooms, area, color, redirectTo}) => {
  return (
    <>
    
        <div className= {`relative w-[270px] h-[300px] bg-[#ffffff] backdrop-blur-2xl shadow-black shadow-md rounded-xl mt-5 mx-6  flex flex-col gap-4 flex-shrink-0 `}>
            <BCardHeader />
            <BCardBody name={name} address={address}/>
            <BCardFooter rooms={rooms} area={area}/>
            

            <ManageButton redirectTo={redirectTo}/>
            {/* <DeleteButton /> */}
        </div>
    </>
  )
}

export default BCard


// bg-[#373737] card bg