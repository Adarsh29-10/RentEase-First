import React, {useState} from 'react';

const PropModalStep1 = ({ formData, setFormData, onNext }) => {
    const [title, setTitle] = useState(formData.title || ""); 
    const [description, setDescription] = useState(formData.description || ""); 
    
      const handleNext = () => {
        if (title.trim() && description.trim()) {
          setFormData({ ...formData, title , description}); 
          onNext({ title, description }); 
        } else {
          alert("All fields are required.");
        }
      };

    return (
        <div>
            <form action="">
                <div className="flex flex-col mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1">Property Title</label>
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter Building Name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1">Property Description</label>
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter building description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </form>

            <div className="flex justify-end mt-6">
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

export default PropModalStep1;