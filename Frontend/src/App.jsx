import React, { useState } from 'react'
import Login from './components/Auth/Login'
import Owner from './components/Dashboard/Owner'
import AddPropertyForm from './components/TaskList/addPropertyForm'
import AddRoomForm from './components/TaskList/addRoomForm'

import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Rooms from './pages/Rooms'
import TenantReg from './components/Auth/TenantReg'
import OwnerReg from './components/Auth/OwnerReg'
import Tenant from './components/Dashboard/Tenant'

const App = () => {

  const [bData, setBdata] = useState(
  [
    {
      "name": "Property 1",
      "address": "Vijay Nagar, Indore",
      "rooms": 4,
      "area": "2000 sq ft",
      "color": "",
      "redirectTo": '/manage-rooms' 
    },
    {
      "name": "Property 2",
      "address": "Ghatabillod, Dhar",
      "rooms": 2,
      "area": "1500 sq ft",
      "color": ""
    },
    {
      "name": "Property 3",
      "address": "Indorama",
      "rooms": 5,
      "area": "1600 sq ft",
      "color": ""
    }
  ]
)
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/TenantRegistration' element={<TenantReg />} />
        <Route path='/OwnerRegistration' element={<OwnerReg />} />
        <Route path='/OwnerDashboard' element={<Owner data={bData} />} />
        <Route path='/TenantDashboard' element={ <Tenant/> } />
        <Route path='/add-new-property' element={<AddPropertyForm handleChange={setBdata} />} />
        <Route path='/add-new-room' element={<AddRoomForm />} />
        <Route path='/manage-rooms' element={<Rooms /> } />
      </Routes>
      
    </>
  )
}

export default App