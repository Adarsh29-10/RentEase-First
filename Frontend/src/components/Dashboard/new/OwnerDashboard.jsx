import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  User, 
  Settings, 
  LogOut, 
  Plus, 
  Menu,
  X
} from 'lucide-react';
import PropertyModal from '../../Modals/PropertModal/PropertyModal';

const OwnerDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Sample properties data
  const [properties, setProperties] = useState([
    {
      _id: '1',
      title: 'Modern 2BHK Apartment',
      description: 'Spacious apartment with modern amenities in a prime location',
      street: '123, Main Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      landmark: 'Near City Mall',
      propertyType: '2BHK',
      rentAmount: 25000,
      isAvailable: true,
      isFullyRented: false,
      amenities: ['Parking', 'Lift', 'Security', 'Gym', 'Swimming Pool'],
      isFurnitured: true,
      rentType: 'entire',
      propertyImages: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80']
    },
    {
      _id: '2',
      title: 'Luxury Villa',
      description: 'Premium villa with garden and swimming pool',
      street: '456, Palm Avenue',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
      landmark: 'Opposite Tech Park',
      propertyType: 'Villa',
      rentAmount: 75000,
      isAvailable: false,
      isFullyRented: true,
      amenities: ['Swimming Pool', 'Garden', 'Security', 'Parking', 'Gym', 'Club House'],
      isFurnitured: true,
      rentType: 'entire',
      propertyImages: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80']
    },
    {
      _id: '3',
      title: 'Studio Apartment',
      description: 'Cozy studio apartment perfect for singles',
      street: '789, Tech Street',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110001',
      landmark: 'Near Metro Station',
      propertyType: 'Studio',
      rentAmount: 15000,
      isAvailable: true,
      isFullyRented: false,
      amenities: ['Lift', 'Security', 'Parking', '24x7 Water Supply'],
      isFurnitured: false,
      rentType: 'entire',
      propertyImages: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80']
    }
  ]);

  const handleLogout = () => {
    // Implement logout logic
    navigate('/');
  };

  const handleAddProperty = () => {
    setIsModalOpen(true);
  };

  const handlePropertySubmit = (propertyData) => {
    // Here you would typically make an API call to save the property
    console.log('New property data:', propertyData);
    setProperties([...properties, propertyData]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-gray-800">RentEase</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-30 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:block`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800">RentEase</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-2">
            <button
              onClick={() => navigate('/OwnerDashboard')}
              className="flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <User className="w-5 h-5 mr-3" />
              Profile
            </button>
            <button
              onClick={() => navigate('/settings')}
              className="flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </button>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-3 text-red-600 rounded-lg hover:bg-red-50"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 min-h-screen">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">My Properties</h2>
            <button
              onClick={handleAddProperty}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Property
            </button>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div
                key={property._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[550px] flex flex-col"
              >
                {/* Property Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={property.propertyImages[0]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex-1 overflow-y-auto">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{property.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{property.description}</p>
                    
                    <div className="mt-3 space-y-2">
                      {/* Location Details */}
                      <div className="flex items-start text-sm text-gray-600">
                        <span className="font-medium min-w-[80px]">Location:</span>
                        <span className="ml-2 line-clamp-1 flex-1">
                          {property.street}, {property.city}, {property.state} - {property.pincode}
                        </span>
                      </div>
                      {property.landmark && (
                        <div className="flex items-start text-sm text-gray-600">
                          <span className="font-medium min-w-[80px]">Landmark:</span>
                          <span className="ml-2 line-clamp-1 flex-1">{property.landmark}</span>
                        </div>
                      )}

                      {/* Property Details */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium min-w-[80px]">Type:</span>
                          <span className="ml-2 truncate">{property.propertyType}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium min-w-[80px]">Rent Type:</span>
                          <span className="ml-2 truncate capitalize">{property.rentType}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium min-w-[80px]">Rent:</span>
                          <span className="ml-2 truncate">₹{property.rentAmount}/month</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium min-w-[80px]">Furnished:</span>
                          <span className="ml-2 truncate">{property.isFurnitured ? 'Yes' : 'No'}</span>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="mt-4">
                        <span className="text-sm font-medium text-gray-600">Amenities:</span>
                        <div className="flex flex-wrap gap-1.5 mt-2 max-h-[80px] overflow-y-auto">
                          {property.amenities.map((amenity, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        property.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {property.isAvailable ? 'Available' : 'Not Available'}
                      </span>
                      {property.isFullyRented && (
                        <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                          Fully Rented
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => navigate(`/manage-rooms/${property._id}`)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Property Modal */}
      {isModalOpen && (
        <PropertyModal Close={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default OwnerDashboard;
