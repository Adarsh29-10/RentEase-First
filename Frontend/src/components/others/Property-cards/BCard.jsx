// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import ManageButton from '../ManageButton.jsx'
// import DeleteButton from '../DeleteButton.jsx'
// import BCardBody from './BCardBody.jsx'
// import BCardFooter from './BCardFooter.jsx'
// import BCardHeader from './BCardHeader.jsx'

// const BCard = ({id, name, address, rooms, area, color, redirectTo}) => {

//   const navigate = useNavigate();
//   const handleNavigate=()=>{
//     navigate(`/manage-rooms/${id}`)
//   }

//   return (
//     <>
    
//         <div className= {`relative w-[270px] h-[300px] bg-[#ffffff] backdrop-blur-2xl shadow-black shadow-md rounded-xl mt-5 mx-6  flex flex-col gap-4 flex-shrink-0 `}>
//             <BCardHeader id={id} />
//             <BCardBody name={name} address={address}/>
//             <BCardFooter rooms={rooms} area={area}/>
            

//             <ManageButton onClick={handleNavigate}/>
//             {/* <DeleteButton /> */}
//         </div>
//     </>
//   )
// }

// export default BCard


// // bg-[#373737] card bg


import React from 'react';
import { useNavigate } from 'react-router-dom';
import BCardBody from './BCardBody';
import BCardFooter from './BCardFooter';

const BCard = ({ id, name, address, rooms, area }) => {
  const navigate = useNavigate();

  return (
    <div className="w-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-110 hover:shadow-lg" >
      <div className="p-4 flex justify-between items-center border-b">
        <span className="text-sm text-gray-500 truncate">ID: {id.slice(-6)}</span>
        <button 
        // ...
          className="text-blue-600 hover:text-blue-800"
          >
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
      
      <BCardBody name={name} address={address} />
      <BCardFooter rooms={rooms} area={area} />
      
      <button
        onClick={() => navigate(`/manage-rooms/${id}`)}
        className="mt-auto bg-blue-700 text-white py-2 px-4 hover:bg-blue-600 transition-colors"
      >
        Manage Property
      </button>
    </div>
  );
};

export default BCard;