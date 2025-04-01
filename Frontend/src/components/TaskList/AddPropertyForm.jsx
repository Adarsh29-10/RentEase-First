import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPropertyForm = ({ Close }) => {

  

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [rooms, setRooms] = useState('');
  const [area, setArea] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    
    if (!name || !address || !rooms || !area) {
      alert('Please fill all the fields.');
      return;
    }
    
    setLoading(true);
    
    try {
      

      const propertyData = {
        name: name,
        address: address,
        rooms: parseInt(rooms),
        area: area,
        
      };
      // Make the API call
      const response = await axios.post('http://localhost:8080/api/add', propertyData);

      if (response.status === 201) {
        alert('Property added successfully!');
        navigate('/OwnerDashboard');
        Close(); // Close modal after successful submission
      }
    } catch (error) {
      console.error('Error adding property:', error);
      if (error.response?.data?.message) {
        alert(`Failed to add property: ${error.response.data.message}`);
      } else {
        alert('Failed to add property. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setAddress('');
    setRooms('');
    setArea('');
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex items-center justify-center p-4">
      {/* Modal Container - Centered with max-width and better UI */}
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Modal Header with Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Add New Property</h1>
          {/* Close Button (X) in top-right corner */}
          <button
            onClick={Close}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Property Name */}
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Property Name</label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter Building Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Address */}
            <div className="flex flex-col mb-4">
              <label htmlFor="address" className="text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter Address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Total Rooms */}
            <div className="flex flex-col mb-4">
              <label htmlFor="rooms" className="text-sm font-medium text-gray-700 mb-1">Total Rooms</label>
              <input
                type="number"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter Total Rooms"
                id="rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
            </div>

            {/* Total Area */}
            <div className="flex flex-col mb-4">
              <label htmlFor="area" className="text-sm font-medium text-gray-700 mb-1">Total Area</label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter Total Area (e.g., 1200 sqft)"
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex justify-end space-x-3 mt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </span>
                ) : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;