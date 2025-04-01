// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const AddBuildingCard = () => {

//   const navigate = useNavigate()
//   const handleDivClick = ()=>{
//     navigate('/add-new-property')
//   }

//   return (
//     <div 
//     onClick={handleDivClick}
//     className='w-[250px] h-[260px] rounded-xl mt-5 mx-7 p-1 flex justify-center items-center flex-col bg-gray-200 text-[#333333] shrink-0 '>

//         <i className="fa-solid fa-plus text-7xl opacity-0.1"></i>
//         <p className='text-xl text-[#333333]'>Add New Building</p>
//     </div> 
    
//   )
// }

// export default AddBuildingCard


import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddBuildingCard = () => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/add-new-property')}
      className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
    >
      <i className="fas fa-plus-circle text-4xl text-gray-400 mb-3"></i>
      <p className="text-gray-600 font-medium">Add New Property</p>
    </div>
  );
};

export default AddBuildingCard;