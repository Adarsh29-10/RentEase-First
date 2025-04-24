import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import React, { useState } from 'react'
// import RoomStatus from './RoomStatus'
// import RoomInfo from './RoomInfo'
// import ActionButtons from './ActionButtons'
// import ExpandButton from './ExpandButton'
// import ExpandedDetails from './ExpandedDetails'

const RCard = ({ 
  roomNumber,
  roomType,
  tenantType,
  floor,
  rentAmount,
  maxOccupancy,
  currentOccupants,
  isFurnitured,
  hasAttachedBath,
  roomImages,
  description,
  roomStatus,
 }) => {
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
                <h1 className='font-semibold text-2xl'>{roomNumber}</h1>
                <h1 className='font-normal'>{tenantType}</h1>
                <h1 className='font-normal'>Rs {rentAmount}</h1>
                <h1 className='font-normal'>{maxOccupancy} / {currentOccupants}</h1>
                <h1 className='font-normal'>{roomStatus}</h1>
                <div>
                    <button onClick={() => setIsExpanded(!isExpanded)}>
                        { isExpanded ? <ArrowUpIcon />:<ArrowDownIcon /> } 
                    </button>
                </div>
            </div>
            {isExpanded && (
                <div className="bg-white p-4 px-20">
                    <p className='text-gray-700 tracking-widest mb-12 border-b-2 py-3'>{roomType} Room at {floor} Floor, {isFurnitured} and Bathroom {hasAttachedBath} with Discription as "{description}" </p>

                    <div className='bg-transparent mb-8 flex align-center justify-between max-w-4xl '>
                       <h1 className=' text-2xl font-sans font-semibold text-gray-700 '>Tenant Dashboard </h1>

                      <button 
                          className="flex items-center bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-xl text-white transition-colors "
                      >
                          Assign Tenant
                      </button>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default RCard