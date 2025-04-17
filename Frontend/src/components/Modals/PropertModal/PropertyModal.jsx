import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import PropModalStep1 from './PropModalStep1';
import PropModalStep2 from './PropModalStep2';
import PropModalStep3 from './PropModalStep3';
import PropModalStep4 from './PropModalStep4';
import PropModalStep5 from './PropModalStep5';
import PropModalStep6 from './PropModalStep6';

 const PropertyModal = ({ Close }) => {

    const [currentStep, setCurrentStep] = useState(1); // Current step logic can be used in future steps
    const [formData, setFormData] = useState({
        title: "Property 1",
        description: "",
        street: "",
        city: "",
        state: "",
        pincode: "",
        landmark: "",
        amenities: "",
        isFurnitured: "",
        propertyType: "",
        rentType: "",
        rentAmount: "",
        propertyImages: "",
        
    })

    const nextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 6))
    }

    const prevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const handleNext = (data) => { // Functionality for next step can be implemented later
        setFormData({ ...formData, ...data });
        nextStep();
    };

    const handleBack = () => { // Functionality for previous step can be implemented later
        prevStep();
    };



  const handleSubmit =  (finalData) => {
    console.log("Final Form Data:", finalData);
  }
//     try {
      

//       const propertyData = {
//         name: name,
//         address: address,
//         rooms: parseInt(rooms),
//         area: area,
        
//       };
//       // Make the API call
//       const response = await axios.post('http://localhost:8080/api/add', propertyData);

//       if (response.status === 201) {
//         alert('Property added successfully!');
//         navigate('/OwnerDashboard');
//         Close(); // Close modal after successful submission
//       }
//     } catch (error) {
//       console.error('Error adding property:', error);
//       if (error.response?.data?.message) {
//         alert(`Failed to add property: ${error.response.data.message}`);
//       } else {
//         alert('Failed to add property. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };



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
            {currentStep === 1 && <PropModalStep1 formData={formData} setFormData={setFormData} onNext={handleNext}/>}
          
            {currentStep === 2 && <PropModalStep2 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext}/>}

            {currentStep === 3 && <PropModalStep3 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext}/>}

            {currentStep === 4 && <PropModalStep4 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext}/>}
           
            {currentStep === 5 && <PropModalStep5 formData={formData} setFormData={setFormData} onBack={handleBack} onNext={handleNext}/>}
            
            {currentStep === 6 && <PropModalStep6 formData={formData} setFormData={setFormData} onBack={handleBack} onSubmit={handleSubmit}/>}
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;