import React, { useState } from 'react'
import RoomList from './RoomList'

const BuildingDropdown = ({name}) => {
  let [isDropdownOpen, setDropdown] = useState(false);

  let toggleDropdown = () =>{
    setDropdown(!isDropdownOpen);
  }

  return (
    <>
      <div 
        onClick={toggleDropdown} 
        className='flex items-center justify-between px-5 py-2 border-2 border-black mt-2 mx-7 rounded-xl'>
          <div className='font-semibold'>{name}</div>
          <div><i class="fa-solid fa-caret-down"></i></div>
      </div> 

      {/* {isDropdownOpen ? <RoomList />  : ''} */}

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isDropdownOpen ? 'max-h-[300px]' : 'max-h-0'}`}>
        <RoomList />
      </div>
      
      
    </>
    
  )
}

export default BuildingDropdown