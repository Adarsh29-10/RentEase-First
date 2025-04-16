import React, {useState} from 'react';

const PropModalStep2 = ({ formData, setFormData, onBack,  onNext }) => {
    const [street, setStreet] = useState(formData.street || ""); 
    const [city, setCity] = useState(formData.city || ""); 
    const [state, setState] = useState(formData.state || ""); 
    const [pincode, setPincode] = useState(formData.pincode || ""); 
    const [landmark, setLandmark] = useState(formData.landmark || ""); 
    
      const handleNext = () => {
        if (street.trim() && city.trim()) {
          setFormData({ ...formData, street , city}); 
          onNext({ street, city }); 
        } else {
          alert("All fields are required.");
        }
      };

    return (
        <div>
            <form action="">
                <div className="flex flex-col mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1">Street</label>
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter Street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
            </form>

            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >Back
                </button>

                <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                Next
                </button>
            </div>
        </div>
        
    );
};

export default PropModalStep2;