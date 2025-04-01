import React, { useState } from 'react';
import BCard from './BCard';
import AddBuildingCard from '../Card-AddNew/AddBuildingCard';
import TrialModal from '../../Modals/TrialModal';
import AddPropertyForm from '../../TaskList/addPropertyForm';

const BuildingCardDiv = ({ data, onAddRoom, onAssignTenant }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  
  return (
    <div className=" p-10 mt-14">
      {/* Header with title and Add Property button */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">Property Management</h1>
        <button 
          onClick={() => setIsModelOpen(true)}
          className="flex items-center bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-xl text-white transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" 
              clipRule="evenodd" 
            />
          </svg>
          Add Property
        </button>
      </div>

      {/* Building cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((property) => (
          <BCard
            key={property._id}
            id={property._id}
            name={property.name}
            address={property.address}
            rooms={property.rooms}
            area={property.area}
          />
        ))}
      </div>

      {/* Modal */}
      {isModelOpen && <AddPropertyForm Close={() => setIsModelOpen(false)} />}
    </div>
  );
};

export default BuildingCardDiv;