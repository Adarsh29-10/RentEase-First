import React, { useState } from 'react'
import RoomStatus from './RoomStatus'
import RoomInfo from './RoomInfo'
import ActionButtons from './ActionButtons'
import ExpandButton from './ExpandButton'
import ExpandedDetails from './ExpandedDetails'

const RCard = ({color = 'bg-[#ffff]', roomNo, name, contact, tStatus, bill, empty}) => {
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
    <div className="w-full mb-3">
      {/* Main Bar */}
      <div className={`
        w-full bg-white rounded-lg shadow-sm
        border border-gray-100
        transition-all duration-200
        ${isExpanded ? 'rounded-b-none border-b-0' : ''}
      `}>
        {/* Main Content Row */}
        <div className="flex items-center justify-between p-4">
          {/* Left Section */}
          <div className="flex items-center gap-6">
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
      {isExpanded && (
        <ExpandedDetails
          contact={contact}
          tStatus={tStatus}
          isOccupied={isOccupied}
          onEdit={handleEdit}
          onAssign={handleAssign}
          onRemove={handleRemove}
        />
      )}
    </div>
  )
}

export default RCard