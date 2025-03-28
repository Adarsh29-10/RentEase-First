import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../others/Header';
import axios from 'axios';

const AddRoomForm = () => {
    const [roomName, setRoomName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [roomTStatus, setRoomTStatus] = useState('');
    const [roomSize, setRoomSize] = useState('');
    const [roomPrice, setRoomPrice] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handelSubmit = async (event) => {
        event.preventDefault();

        if (!roomName || !roomNumber || !roomTStatus || !roomSize || !roomPrice) {
            alert('Please fill all the fields.');
            return;
        }

        const roomData = {
            roomName,
            roomNumber,
            roomTStatus,
            roomSize,
            roomPrice,
        };

        setLoading(true);

        try {
            const response = await axios.post('/api/newRoom', roomData);

            if (response.status === 201) {
                alert('Room added successfully!');
                navigate('/manage-rooms/');  // Redirecting to manage-rooms
            }
        } catch (error) {
            console.error('Error adding room:', error);
            if (error.response && error.response.data && error.response.data.message) {
                alert(`Failed to add property: ${error.response.data.message}`);
            } else {
                alert('Failed to add room. Please try again.');
            }
        } finally {
            setLoading(false);  // Stop loading
        }
    };

    const handleReset = () => {
        setRoomName('');
        setRoomNumber('');
        setRoomTStatus('');
        setRoomSize('');
        setRoomPrice('');
    };

    return (
        <div>
            <Header />

            <div className='p-20'>
                <h1 className='text-4xl mb-4 font-bold underline'>Add New Room</h1>

                <div className='w-[90%] flex flex-col items-center justify-center'>
                    <form onSubmit={handelSubmit} className='w-full flex flex-col'>
                        <div className='flex items-center justify-between'>
                            <label className='font-bold text-2xl'>Room Name:</label>
                            <input
                                className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-xl text-sm px-2 py-2 my-4'
                                placeholder='Room Name'
                                id='roomName'
                                value={roomName}
                                onChange={(e) => setRoomName(e.target.value)}
                            />
                        </div>
                        <div className='flex items-center justify-between'>
                            <label className='font-bold text-2xl'>Room Number:</label>
                            <input
                                className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-xl text-sm px-2 py-2 my-4'
                                placeholder='Room number'
                                id='roomNumber'
                                value={roomNumber}
                                onChange={(e) => setRoomNumber(e.target.value)}
                            />
                        </div>
                        <div className='flex items-center justify-between'>
                            <label className='font-bold text-2xl'>Tenant status:</label>
                            <input
                                className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-xl text-sm px-2 py-2 my-4'
                                placeholder='Tenant status'
                                id='roomTStatus'
                                value={roomTStatus}
                                onChange={(e) => setRoomTStatus(e.target.value)}
                            />
                        </div>
                        <div className='flex items-center justify-between'>
                            <label className='font-bold text-2xl'>Room Size:</label>
                            <input
                                className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-xl text-sm px-2 py-2 my-4'
                                placeholder='Room Size'
                                id='roomSize'
                                value={roomSize}
                                onChange={(e) => setRoomSize(e.target.value)}
                            />
                        </div>
                        <div className='flex items-center justify-between'>
                            <label className='font-bold text-2xl'>Room Price:</label>
                            <input
                                className='placeholder-gray-500 border-2 w-[80%] border-black outline-none rounded-xl text-sm px-2 py-2 my-4'
                                placeholder='Room Price'
                                id='roomPrice'
                                value={roomPrice}
                                onChange={(e) => setRoomPrice(e.target.value)}
                            />
                        </div>

                        <div className='flex items-center justify-end gap-4'>
                            <button
                                type="button"
                                className='bg-black text-white rounded-xl font-semibold w-40 py-2 my-4 text-sm hover:bg-gray-400'
                                onClick={handleReset}
                            >
                                Reset
                            </button>

                            <button
                                type="submit"
                                className='bg-black w-40 text-white rounded-xl font-semibold py-2 my-4 text-sm hover:bg-gray-400'
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRoomForm;