// import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import Owner from './components/Dashboard/Owner';

import Rooms from './pages/Rooms';
import Tenant from './components/Dashboard/Tenant';

import AuthPage from './pages/AuthPage';
import Profile from './pages/Profile';




const App = () => {
  
  return (
    
    <Routes>
      <Route path='/' element={<AuthPage />} />

      <Route 
        path='/OwnerDashboard' 
        element={
          <Owner/>
        } 
        
      />

      <Route path='/TenantDashboard' element={<Tenant/>} />
     

      <Route 
        path='/manage-rooms/:id' 
        element={<Rooms />} 
      />

      <Route path='/profile' element={<Profile/>} />
      
    </Routes>
  );
};

export default App;