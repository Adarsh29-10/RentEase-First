import React, {useState} from 'react';

const PropModalStep4 = ({ formData, setFormData, onBack,  onNext }) => {
    const [propertyType, setPropertyType] = useState(formData.propertyType || ""); 
    const [rentType, setRentType] = useState(formData.rentType || ""); 
    
    
      const handleNext = () => {
        if (propertyType.trim() && rentType.trim() ) {
          setFormData({ ...formData, propertyType , rentType}); 
          onNext({propertyType , rentType}); 
        } else {
          alert("All fields are required.");
        }
      };

    return (
        <div>
            <form action="">
                <div className="flex flex-col mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter Property Type"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1">Rent Type</label>
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter Rent type"
                        value={rentType}
                        onChange={(e) => setRentType(e.target.value)}
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

export default PropModalStep4;