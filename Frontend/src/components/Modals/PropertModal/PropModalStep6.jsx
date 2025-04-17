import React, {useState} from 'react';

const PropModalStep6 = ({ formData, setFormData, onBack,  onSubmit }) => {
    const [propertyImages, setPropertyImages] = useState(formData.propertyImages || ""); 
    
    
      const handleSubmit = () => {
        if (propertyImages.trim()  ) {
          setFormData({ ...formData, propertyImages }); 
          onSubmit({...formData, propertyImages }); 
        } else {
          alert("All fields are required.");
        }
      };

    return (
        <div>
            <form action="">
                <div className="flex flex-col mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1">Upload images</label>
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Upload images"
                        value={propertyImages}
                        onChange={(e) => setPropertyImages(e.target.value)}
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
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600"
                >
                Submit
                </button>
            </div>
        </div>
        
    );
};

export default PropModalStep6;