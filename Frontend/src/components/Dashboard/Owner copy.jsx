import React, { useState } from 'react';
import Header from '../others/Header';
import BuildingCardDiv from '../others/Property-cards/BuildingCardDiv';
import PropertyFormModal from '../Modals/PropertyFormModal';
// import RoomFormModal from '../Modals/RoomFormModal';
// import TenantAssignmentModal from '../Modals/TenantAssignmentModal';

const Owner = ({ data }) => {
  // Modal states
  // const [showPropertyModal, setShowPropertyModal] = useState(false);
  // const [showRoomModal, setShowRoomModal] = useState(false);
  // const [showTenantModal, setShowTenantModal] = useState(false);
  // const [selectedProperty, setSelectedProperty] = useState(null);
  // const [selectedRoom, setSelectedRoom] = useState(null);

  // Handle property addition
  // const handlePropertyAdded = (newProperty) => {
  //   onDataUpdate([...data, newProperty]);
  //   setShowPropertyModal(false);
  // };

  // Handle room addition
  // const handleRoomAdded = (propertyId, newRoom) => {
  //   const updatedData = data.map(property => 
  //     property._id === propertyId
  //       ? { ...property, rooms: [...property.rooms, newRoom] }
  //       : property
  //   );
  //   onDataUpdate(updatedData);
  //   setShowRoomModal(false);
  // };

  // Handle tenant assignment
  // const handleTenantAssigned = (propertyId, roomId, tenantData) => {
  //   const updatedData = data.map(property => {
  //     if (property._id === propertyId) {
  //       const updatedRooms = property.rooms.map(room => 
  //         room._id === roomId 
  //           ? { ...room, tenant: tenantData } 
  //           : room
  //       );
  //       return { ...property, rooms: updatedRooms };
  //     }
  //     return property;
  //   });
  //   onDataUpdate(updatedData);
  //   setShowTenantModal(false);
  // };

  return (
    <div className="min-h-screen my-8">
      <Header />  
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Properties</h1>
          <button
            // onClick={() => setShowPropertyModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
            <i className="fas fa-plus"></i> Add Property
          </button>
        </div>

        <BuildingCardDiv 
          data={data} 
          // onAddRoom={(propertyId) => {
          //   setSelectedProperty(propertyId);
          //   setShowRoomModal(true);
          // }}
          // onAssignTenant={(propertyId, room) => {
          //   setSelectedProperty(propertyId);
          //   setSelectedRoom(room);
          //   setShowTenantModal(true);
          // }}
        />
      </div>

      {/* Property Modal */}
      {/* {showPropertyModal && (
        <PropertyFormModal
          onClose={() => setShowPropertyModal(false)}
          onSuccess={handlePropertyAdded}
        />
      )} */}

      {/* Room Modal */}
      {/* {showRoomModal && selectedProperty && (
        <RoomFormModal
          propertyId={selectedProperty}
          onClose={() => setShowRoomModal(false)}
          onSuccess={(newRoom) => handleRoomAdded(selectedProperty, newRoom)}
        />
      )} */}

      {/* Tenant Assignment Modal */}
      {/* {showTenantModal && selectedRoom && (
        <TenantAssignmentModal
          room={selectedRoom}
          onClose={() => setShowTenantModal(false)}
          onSuccess={(tenantData) => 
            handleTenantAssigned(selectedProperty, selectedRoom._id, tenantData)
          }
        />
      )} */}
    </div>
  );
};

export default Owner;