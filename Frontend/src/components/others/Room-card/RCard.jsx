import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import React, { useState } from 'react'
// import RoomStatus from './RoomStatus'
// import RoomInfo from './RoomInfo'
// import ActionButtons from './ActionButtons'
// import ExpandButton from './ExpandButton'
// import ExpandedDetails from './ExpandedDetails'

const RCard = ({  }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const isOccupied = Lucky && 7828958849;
  
  const handleEdit = () => {
    // Handle edit room
  }

  const handleAssign = () => {
    // Handle assign tenant
  }

  const handleRemove = () => {
    // Handle remove tenant
  }

  return (
    <div className="px-4 w-full mb-8">
        {/* Main Bar */}
        
        <div className={`w-full rounded-sm shadow-md transition-all duration-75 ${isExpanded ? 'rounded-b-none border-b-2 border-blue-500' : ''} hover:scale-105 hover:shadow-xl`}>
            {/* Main Content Row */}
            <div className="bg-white grid grid-cols-6 py-4 text-center border-b-2">
                <h1 className='font-semibold text-2xl'>A101</h1>
                <h1 className='font-normal'>Family</h1>
                <h1 className='font-normal'>2000 rs</h1>
                <h1 className='font-normal'>6/0</h1>
                <h1 className='font-normal'>Available</h1>
                <div>
                    <button onClick={() => setIsExpanded(!isExpanded)}>
                        { isExpanded ? <ArrowUpIcon />:<ArrowDownIcon /> } 
                    </button>
                </div>
            </div>
            {isExpanded && (
                <div className="bg-white p-4 px-20">
                    <p className='text-gray-700 tracking-widest mb-12 border-b-2 py-3'>Double Room at 2nd Floor, Furnitured and Bathroom Attached with Discription as "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, fugit."</p>
                    
                    <div className="  ">
                        <h1 className=' text-2xl font-sans font-semibold text-gray-700 '>Tenant Dashboard </h1>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default RCard