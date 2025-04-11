import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './components/Dashboard/LandiingPage';
import Login from './components/Auth/Login';
import Owner from './components/Dashboard/Owner';
import AddPropertyForm from './components/TaskList/addPropertyForm';
import AddRoomModal from './components/TaskList/AddRoomModal.jsx';
import Rooms from './pages/Rooms';
import TenantReg from './components/Auth/TenantReg';
import OwnerReg from './components/Auth/OwnerReg';
import Tenant from './components/Dashboard/Tenant';
import LoadingSpinner from './components/others/LoadingSpinner';
// import ErrorMessage from './components/others/ErrorMessage';

import AuthPage from './pages/AuthPage';
import AuthContainer from './components/Auth/New/AuthContainer';




const App = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(' http://localhost:8080/api/properties');
      setData(response.data.properties);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch properties');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handlePropertyAdded = (newProperty) => {
    setData([...data, newProperty]);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={fetchProperties} />;

  return (
    
    <Routes>
      <Route path='/' element={<AuthPage />} />

      {/* <Route path='/' element={<Login />} /> */}
      {/* <Route path='/TenantRegistration' element={<TenantReg />} /> */}
      {/* <Route path='/OwnerRegistration' element={<OwnerReg />} /> */}
      
      <Route 
        path='/OwnerDashboard' 
        element={
          <Owner data={data}/>
        } 
        
      />
      <Route path='/TenantDashboard' element={<Tenant properties={data} />} />
      <Route 
        path='/add-new-property' 
        element={<AddPropertyForm onSuccess={handlePropertyAdded} />} 
      />
      <Route 
        path='/manage-rooms/:id' 
        element={<Rooms data={data} onDataUpdate={fetchProperties} />} 
      />
      {/* <Route 
        path='/add-new-room' 
        element={<AddRoomModal onSuccess={fetchProperties} />} 
      /> */}
    </Routes>
  );
};

export default App;