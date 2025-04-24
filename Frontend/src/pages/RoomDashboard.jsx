import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RCard from '../components/others/Room-card/RCard.jsx';
import AddRoomModal from '../components/Modals/RoomModal/RoomModal.jsx';
import { useNavigate, useParams } from 'react-router-dom';

const RoomDashboard = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className='h-screen overflow-x-hidden max-w-full mx-auto py-8 px-4'>
            <div className='bg-transparent mb-8 flex align-center justify-between w-full'>
                <h1 className='font-bold text-3xl font-sans'>Rooms Dashboard</h1>
                <button 
                    onClick={() => setIsModelOpen(true)}
                    className="flex items-center bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-xl text-white transition-colors"
                >
                    Add new room
                </button>
            </div>
            
            <div  >
                {/* {rooms.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No rooms found for this property.</p>
                    </div>
                ) : (
                    rooms.map(room => (
                        <RCard 
                            // key={room._id}
                            // roomNumber={room.roomNumber}
                            // roomType={room.currentOccupants?.name || ""}
                            // contact={room.currentOccupants?.contact || ""}
                            // tStatus={room.tenantType || ""}
                            // bill={room.paymentStatus || "Not Paid"}
                            // empty={!room.isOccupied ? "Empty" : undefined}
                        />
                    ))
                )} */}
                <div className="grid grid-cols-6 px-4 mb-1 text-center">
                    <h1 className='text-gray-400 text-sm'>Number</h1>
                    <h1 className='text-gray-400 text-sm'>Tenant Type</h1>
                    <h1 className='text-gray-400 text-sm'>Rent</h1>
                    <h1 className='text-gray-400 text-sm'>Max/Current</h1>
                    <h1 className='text-gray-400 text-sm'>Status</h1>
                </div>
                <RCard />
                <RCard />
                <RCard />
                
                {isModelOpen && (
                    <AddRoomModal 
                        Close={() => setIsModelOpen(false)} 
                        propertyId={id}
                        onRoomAdded={(newRoom) => setRooms([...rooms, newRoom])}
                    />
                )}
            </div>
        </div>
    );
};

export default RoomDashboard;