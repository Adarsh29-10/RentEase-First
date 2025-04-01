// import React from 'react'

// const BCardBody = ({name, address}) => {
//     return (
//       <>
//           <div className='px-4 '>
//               <h1 className='text-5xl font-semibold text-black'>{name}</h1>
//               <p className='px-2 mt-3 text-black'>{address}</p>
//           </div>
  
//       </>
     
//     )
// }

// export default BCardBody


import React from 'react';

const BCardBody = ({ name, address }) => {
  return (
    <div className="p-4 flex-grow">
      <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{name}</h2>
      <p className="text-gray-600 text-sm line-clamp-3">
        <i className="fas fa-map-marker-alt mr-2"></i>
        {address}
      </p>
    </div>
  );
};

export default BCardBody;