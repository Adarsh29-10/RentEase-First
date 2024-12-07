import React, { useState } from 'react';
import Header from '../others/Header';
import { useNavigate } from 'react-router-dom';

const AddPropertyForm = ({ handleChange }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [rooms, setRooms] = useState('');
  const [area, setArea] = useState('');

  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log('Submit clicked on add property');

    const newData = {
      name,
      address,
      rooms,
      area,
      color: '',
    };

    handleChange((prev) => [...prev, newData]);
    navigate('/OwnerDashboard');
  };

  const handleReset = () => {
    setName('');
    setAddress('');
    setRooms('');
    setArea('');
  };

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Add New Building</h1>

        <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg p-8">

          <form onSubmit={handelSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Property Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold mb-2">
                Property Name
              </label>
              <input
                className="text-black placeholder-gray-500 border border-gray-400 rounded-md px-4 py-2"
                placeholder="Enter Building Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label htmlFor="address" className="text-lg font-semibold mb-2">
                Address
              </label>
              <input
                className="text-black placeholder-gray-500 border border-gray-400 rounded-md px-4 py-2"
                placeholder="Enter Address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Total Rooms */}
            <div className="flex flex-col">
              <label htmlFor="rooms" className="text-lg font-semibold mb-2">
                Total Rooms
              </label>
              <input
                className="text-black placeholder-gray-500 border border-gray-400 rounded-md px-4 py-2"
                placeholder="Enter Total Rooms"
                id="rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
            </div>

            {/* Total Area */}
            <div className="flex flex-col">
              <label htmlFor="area" className="text-lg font-semibold mb-2">
                Total Area
              </label>
              <input
                className="text-black placeholder-gray-500 border border-gray-400 rounded-md px-4 py-2"
                placeholder="Enter Total Area"
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex justify-between items-center mt-6">
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-500"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;
