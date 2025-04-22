import React, { useState } from 'react';


const RoomModal = ({ Close }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    roomNumber: "",
    roomType: "",
    tenantType: "",
    floor: "",
    rentAmount: "",
    maxOccupancy: "",
    currentOccupants: "",
    furnishedStatus: "",
    hasAttachedBath: "",   
    roomImages: [],
    description: "",
  });


  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 6));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  const handleBack = () => {
    prevStep();
  };

  

  const handleSubmit = async (finalData) => {
    setIsSubmitting(true);
    console.log("Submitting form data...", finalData);
    
    // try {
    //   const formDataToSubmit = new FormData();
      
    //   // Append all non-file fields
    //   Object.keys(formData).forEach(key => {
    //     if (key !== 'propertyImages' && formData[key] !== undefined && formData[key] !== null) {
    //       formDataToSubmit.append(key, formData[key]);
    //     }
    //   });

    //   // Append files if they exist in finalData
    //   if (finalData instanceof FormData) {
    //     // If coming from Step6, it's already FormData with files
    //     for (let [key, value] of finalData.entries()) {
    //       if (key === 'propertyImages') {
    //         formDataToSubmit.append('propertyImages', value);
    //       }
    //     }
    //   } else if (finalData.propertyImages && finalData.propertyImages.length > 0) {
    //     // If coming from other steps with File objects
    //     finalData.propertyImages.forEach(file => {
    //       formDataToSubmit.append('propertyImages', file);
    //     });
    //   } else {
    //     throw new Error("At least one image is required");
    //   }

    //   const response = await api.post("/properties/add-new-property", formDataToSubmit, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
      
    //   alert("Property Submitted Successfully");
    //   Close();
    // } catch (err) {
    //   console.error("Submission error:", err);
    //   alert(`Failed to add new property: ${err.response?.data?.message || err.message}`);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Add New Room</h1>
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

        <div className="p-6">
          {currentStep === 1 && (
            <PropModalStep1
              formData={formData}
              setFormData={setFormData}
              onNext={handleNext}
            />
          )}

          {/* {currentStep === 2 && (
            <PropModalStep2
              formData={formData}
              setFormData={setFormData}
              onBack={handleBack}
              onNext={handleNext}
            />
          )}

         

          {currentStep === 3 && (
            <PropModalStep4
              formData={formData}
              setFormData={setFormData}
              onBack={handleBack}
              onNext={handleNext}
            />
          )}

          

          {currentStep === 4 && (
            <PropModalStep6
              formData={formData}
              setFormData={setFormData}
              onBack={handleBack}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default RoomModal;