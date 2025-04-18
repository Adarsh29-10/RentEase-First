import React, { useState } from 'react';
import BCard from './BCard';
import AddBuildingCard from '../Card-AddNew/AddBuildingCard';
import TrialModal from '../../Modals/TrialModal';
import PropertyModal from '../../Modals/PropertModal/PropertyModal.jsx'

const BuildingCardDiv = ({ data, onAddRoom, onAssignTenant }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [properties, setProperties] = useState([
      {
        _id: '1',
        title: 'Modern 2BHK Apartment',
        description: 'Spacious apartment with modern amenities in a prime location',
        street: '123, Main Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        landmark: 'Near City Mall',
        propertyType: '2BHK',
        rentAmount: 25000,
        isAvailable: true,
        isFullyRented: false,
        amenities: ['Parking', 'Lift', 'Security', 'Gym', 'Swimming Pool'],
        isFurnitured: true,
        rentType: 'entire',
        propertyImages: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80']
      },
      
      {
        _id: '2',
        title: 'Luxury Villa',
        description: 'Premium villa with garden and swimming pool',
        street: '456, Palm Avenue',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
        landmark: 'Opposite Tech Park',
        propertyType: 'Villa',
        rentAmount: 75000,
        isAvailable: false,
        isFullyRented: true,
        amenities: ['Swimming Pool', 'Garden', 'Security', 'Parking', 'Gym', 'Club House'],
        isFurnitured: true,
        rentType: 'entire',
        propertyImages: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80']
      },
      {
        _id: '3',
        title: 'Studio Apartment',
        description: 'Cozy studio apartment perfect for singles',
        street: '789, Tech Street',
        city: 'Delhi',
        state: 'Delhi',
        pincode: '110001',
        landmark: 'Near Metro Station',
        propertyType: 'Studio',
        rentAmount: 15000,
        isAvailable: true,
        isFullyRented: false,
        amenities: ['Lift', 'Security', 'Parking', '24x7 Water Supply'],
        isFurnitured: false,
        rentType: 'entire',
        propertyImages: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80']
      }
    ]);

    
  
  return (
    <div className=" p-10 mt-2 ">
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
          {properties?.map((property) => (
            <BCard
              key={property._id}
              id={property._id}
              title={property.title}
              description={property.description}
              street={property.street}
              city={property.city}
              state={property.state}
              pincode={property.pincode}
              landmark={property.landmark}
              propertyType={property.propertyType}
              rentAmount={property.rentAmount}
              isAvailable={property.isAvailable}
              isFullyRented={property.isFullyRented}
              amenities={property.amenities}
              isFurnitured={property.isFurnitured}
              rentType={property.rentType}
              propertyImages={property.propertyImages}
            />
          ))}
        </div>

        {/* Modal */}
      {isModelOpen && <PropertyModal Close={() => setIsModelOpen(false)} />}
    </div>
  );
};

export default BuildingCardDiv;