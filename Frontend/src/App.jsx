// import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import axios from 'axios';
import OwnerDashboard from './components/Dashboard/OwnerDashboard';

import Rooms from './pages/Rooms';
import TenantDashboard from './components/Dashboard/TenantDashboard';

import AuthPage from './pages/AuthPage';
import Profile from './pages/Sidebar/Profile';
import Settings from './pages/Sidebar/Settings';
import Statistics from './pages/Sidebar/Statistics';
import OwnerLayout from './Layouts/OwnerLayout';
import Billings from './pages/Sidebar/Billings';
import Help from './pages/Sidebar/Help';
import ViewProperty from './pages/ViewProperty';
import MainLayout from './Layouts/MainLayout';
import RoomView from './pages/RoomView';




const App = () => {
  
  return (
    
    <Routes>
      <Route path='/' element={<Navigate to = "/auth" />} />
      <Route path='/auth' element={<AuthPage />} />

      <Route path='/TenantDashboard' element={<TenantDashboard/>} />

      <Route element={<MainLayout />}>
        <Route path='/OwnerDashboard' element={< OwnerLayout />}>
          <Route index element={< OwnerDashboard />} />
          <Route path='Statistics' element={<Statistics />} />
          <Route path='Billings' element={<Billings />} />
          <Route path='Settings' element={<Settings />} />
          <Route path='Help' element={<Help />} />
          <Route path='profile' element={<Profile/>} />

          <Route path='property-details/:id' element={<ViewProperty />} />
          <Route path='rooms/:id' element={<Rooms />} />
          <Route path='viewroom' element={<RoomView />} />
        </Route>
      </Route>
       
      

    </Routes>
  );
};

export default App;