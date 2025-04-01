// import React from 'react'

// const BCardFooter = ({rooms, area}) => {
//   return (
//     <div className=' flex items-center justify-between px-6 mt-6  '>
//         <div>
//             <h1 className='text-[.9rem] font-medium text-black'>Area: {area}</h1>
//         </div>
//         <div>
//             <h1 className=' text-[.9rem] font-medium text-black'>Rooms: {rooms}</h1>
//         </div>
        
//     </div>
//   )
// }

// export default BCardFooter

// // text-[#E1E1E1] 


import React from 'react';

const BCardFooter = ({ rooms, area }) => {
  return (
    <div className="px-4 py-3 bg-gray-50 flex justify-between">
      <div className="flex items-center">
        <i className="fas fa-door-open text-gray-500 mr-2"></i>
        <span className="text-sm">{rooms} rooms</span>
      </div>
      <div className="flex items-center">
        <i className="fas fa-ruler-combined text-gray-500 mr-2"></i>
        <span className="text-sm">{area} sqft</span>
      </div>
    </div>
  );
};

export default BCardFooter;