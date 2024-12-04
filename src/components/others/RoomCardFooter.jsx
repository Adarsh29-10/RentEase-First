import React from 'react'

const RoomCardFooter = ({roomNo, tStatus}) => {
    return (
        <div className='flex items-center justify-start gap-5 px-5 mt-1'>
            <div>
                <h1 className='text-[.9rem] font-medium text-gray-600'>Room no.: {roomNo}</h1>
            </div>
            <div>
                <h1 className='text-[.9rem] font-medium text-gray-600'>Status: {tStatus}</h1>
            </div>
        </div>
      )
}

export default RoomCardFooter