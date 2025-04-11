import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../others/Header';
import axios from 'axios';

const AddRoomModal = ({close}) => {
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
            {/* <Header /> */}

            {/* full screen div */}
            <div className='fixed inset-0  bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center'>

                {/* centered conainer */}
                <div className='relative w-full max-w-2xl bg-white flex flex-col items-center justify-center px-4'>

                    {/* header */}
                    <div className='flex justify-between items-center w-full p-4 shadow-sm overflow-hidden'>
                        <h1 className='text-2xl '>Add N ew Room</h1>
                        <button
                           onClick={close}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handelSubmit} className='w-full '>
                        <div className='grid grid-cols-2  p-4'>

                            <div className=''>
                                <label className='text-sm font-medium text-gray-700 '>Room Name:</label>
                                <input
                                    className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-sm text-sm px-2 py-1.5 mb-4'
                                    placeholder='Room Name'
                                    id='roomName'
                                    value={roomName}
                                    onChange={(e) => setRoomName(e.target.value)}
                                />
                            </div>

                            <div className=''>
                                <label className='text-sm font-medium text-gray-700'>Room Number:</label>
                                <input
                                    className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-sm text-sm px-2 py-1.5 mb-4'
                                    placeholder='Room number'
                                    id='roomNumber'
                                    value={roomNumber}
                                    onChange={(e) => setRoomNumber(e.target.value)}
                                />
                            </div>
                            <div className=''>
                                <label className='text-sm font-medium text-gray-700'>Tenant status:</label>
                                <input
                                    className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-sm text-sm px-2 py-1.5 mb-4'
                                    placeholder='Tenant status'
                                    id='roomTStatus'
                                    value={roomTStatus}
                                    onChange={(e) => setRoomTStatus(e.target.value)}
                                />
                            </div>
                            <div className=''>
                                <label className='text-sm font-medium text-gray-700'>Room Size:</label>
                                <input
                                    className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-sm text-sm px-2 py-1.5 mb-4 '
                                    placeholder='Room Size'
                                    id='roomSize'
                                    value={roomSize}
                                    onChange={(e) => setRoomSize(e.target.value)}
                                />
                            </div>
                            <div className=''>
                                <label className='text-sm font-medium text-gray-700'>Room Price:</label>
                                <input
                                    className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-sm text-sm px-2 py-1.5 '
                                    placeholder='Room Price'
                                    id='roomPrice'
                                    value={roomPrice}
                                    onChange={(e) => setRoomPrice(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-end gap-4 px-4'>
                            <button
                                type="button"
                                className='bg-blue-600 text-white rounded-md font-semibold w-40 py-2 my-4 text-sm hover:bg-blue-700'
                                onClick={handleReset}
                            >
                                Reset
                            </button>

                            <button
                                type="submit"
                                className='bg-blue-600 text-white rounded-md font-semibold w-40 py-2 my-4 text-sm hover:bg-blue-700'
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

export default AddRoomModal;