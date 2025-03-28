import React, { useState } from 'react';
import Header from '../others/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPropertyForm = () => {  // Removed handleChange as a prop
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [rooms, setRooms] = useState('');
  const [area, setArea] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {  // Corrected function name
    event.preventDefault();
    
    // Check if all fields are filled
    if (!name || !address || !rooms || !area) {
      alert('Please fill all the fields.');
      return;
    }

    const propertyData = {
      name: name,
      address: address,
      rooms: parseInt(rooms),
      area: area,
    };

    setLoading(true);  // Start loading

    try {
      const response = await axios.post('/api/add', propertyData);
      
      if (response.status === 201) {
        alert('Property added successfully!');
        navigate('/OwnerDashboard');  // Redirecting to OwnerDashboard
      }
    } catch (error) {
      console.error('Error adding property:', error);
      if (error.response && error.response.data && error.response.data.message) {
          alert(`Failed to add property: ${error.response.data.message}`);
      } else {
          alert('Failed to add property. Please try again.');
      }
    }
    finally {
      setLoading(false);  // Stop loading
    }
  };

  const handleReset = () => {
    setName('');
    setAddress('');
    setRooms('');
    setArea('');
  };

  return (
    <div className="pt-20 overflow-hidden">
      <Header />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Add New Building</h1>

        <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Property Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold mb-2">Property Name</label>
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
              <label htmlFor="address" className="text-lg font-semibold mb-2">Address</label>
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
              <label htmlFor="rooms" className="text-lg font-semibold mb-2">Total Rooms</label>
              <input
                type="number"
                className="text-black placeholder-gray-500 border border-gray-400 rounded-md px-4 py-2"
                placeholder="Enter Total Rooms"
                id="rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
            </div>

            {/* Total Area */}
            <div className="flex flex-col">
              <label htmlFor="area" className="text-lg font-semibold mb-2">Total Area</label>
              <input
                className="text-black placeholder-gray-500 border border-gray-400 rounded-md px-4 py-2"
                placeholder="Enter Total Area (e.g., 1200 sqft)"
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
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;
