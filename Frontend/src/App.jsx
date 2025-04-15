// import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import Owner from './components/Dashboard/Owner';
import AddPropertyForm from './components/TaskList/addPropertyForm';
// import AddRoomModal from './components/TaskList/AddRoomModal.jsx';
import Rooms from './pages/Rooms';
import Tenant from './components/Dashboard/Tenant';

import AuthPage from './pages/AuthPage';




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
        path='/add-new-property' 
        element={<AddPropertyForm />} 
      />

      <Route 
        path='/manage-rooms/:id' 
        element={<Rooms />} 
      />
      
    </Routes>
  );
};

export default App;