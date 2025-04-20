import React, { useState } from 'react'
import RoomStatus from './RoomStatus'
import RoomInfo from './RoomInfo'
import ActionButtons from './ActionButtons'
import ExpandButton from './ExpandButton'
import ExpandedDetails from './ExpandedDetails'

const RCard = ({ roomNo, name, contact, tStatus, bill, empty}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isOccupied = name && contact;
  
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
    
    <div className="px-4 w-full mb-8  ">
      {/* Main Bar */}
      <div className={`w-full bg-white rounded-sm shadow-md 
        
        transition-all duration-75 ${isExpanded ? 'rounded-b-none border-b-2' : ''}
      `}>
        {/* Main Content Row */}
        <div className=" flex items-center justify-between p-4">
          {/* Left Section */}
          <div className="flex items-center gap-6 ">
            <RoomStatus roomNo={roomNo} isOccupied={isOccupied} />
            <RoomInfo name={name} bill={bill} isOccupied={isOccupied} />
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center gap-3">
            <ActionButtons 
              isOccupied={isOccupied}
              onEdit={handleEdit}
              onAssign={handleAssign}
            />
            <ExpandButton 
              isExpanded={isExpanded}
              onClick={() => setIsExpanded(!isExpanded)}
            />
          </div>
        </div>
      </div>

      {/* Expandable Details Section */}
      {/* {isExpanded && (
        <ExpandedDetails
          contact={contact}
          tStatus={tStatus}
          isOccupied={isOccupied}
          onEdit={handleEdit}
          onAssign={handleAssign}
          onRemove={handleRemove}
        />
      )} */}
      {isExpanded && (
        <div className='bg-gray-50 h-48 p-10'>
          <h1 className='text-center'>Coming soon </h1>
        </div>
      )}
    </div>
  )
}

export default RCard