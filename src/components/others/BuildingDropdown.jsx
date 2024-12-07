import React, { useState } from 'react'
import RoomList from './RoomList'
import RoomDropdown from './RoomDropdown';

const BuildingDropdown = ({name}) => {
  let [isDropdownOpen, setDropdown] = useState(false);

  let toggleDropdown = () =>{
    setDropdown(!isDropdownOpen);
  }

  return (
    <>
      <div 
        onClick={toggleDropdown} 
        className='flex items-center justify-between px-5 py-2 border-2 border-white mx-7 mt-8 '>
          <div className='font-semibold'>{name}</div>
          <div><i class="fa-solid fa-caret-down"></i></div>
      </div> 

      {/* {isDropdownOpen ? <RoomList />  : ''} */}

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isDropdownOpen ? 'max-h-[300px]' : 'max-h-0'}`}>
        {/* <RoomList /> */}
        <RoomDropdown />
        <RoomDropdown />
        <RoomDropdown />
      </div>
      
      
    </>
    
  )
}

export default BuildingDropdown