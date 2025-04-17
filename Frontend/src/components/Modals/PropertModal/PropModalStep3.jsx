import React, {useState} from 'react';

const PropModalStep3 = ({ formData, setFormData, onBack,  onNext }) => {
    const [amenities, setAmenities] = useState(formData.amenities || ""); 
    const [isFurnitured, setIsFurnitured] = useState(formData.isFurnitured || ""); 
    
    
      const handleNext = () => {
        if (amenities.trim() && isFurnitured.trim() ) {
          setFormData({ ...formData, amenities , isFurnitured}); 
          onNext({amenities , isFurnitured}); 
        } else {
          alert("All fields are required.");
        }
      };

    return (
        <div>
            <form action="">
                <div className="flex flex-col mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1">Amenities</label>
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter Amenities"
                        value={amenities}
                        onChange={(e) => setAmenities(e.target.value)}
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1">Furniture Status</label>
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Is Furnitured?"
                        value={isFurnitured}
                        onChange={(e) => setIsFurnitured(e.target.value)}
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

export default PropModalStep3;