// import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import Owner from './components/Dashboard/Owner';

import Rooms from './pages/Rooms';
import Tenant from './components/Dashboard/Tenant';

import AuthPage from './pages/AuthPage';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import OwnerDashboard from './components/Dashboard/new/OwnerDashboard';




const App = () => {
  
  return (
    
    <Routes>
      <Route path='/' element={<AuthPage />} />

      <Route 
        path='/Owner' 
        element={
          <OwnerDashboard />
        } 
        
      />
      <Route 
        path='/OwnerDashboard' 
        element={
          <Owner />
        } 
        
      />

      <Route path='/TenantDashboard' element={<Tenant/>} />
     

      <Route 
        path='/manage-rooms/:id' 
        element={<Rooms />} 
      />

      <Route path='/profile' element={<Profile/>} />
      <Route path='/settings' element={<Settings />} />
      
    </Routes>
  );
};

export default App;