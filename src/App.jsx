import React, { useState } from 'react'
import Login from './components/Auth/Login'
import Owner from './components/Dashboard/Owner'
import AddPropertyForm from './components/TaskList/addPropertyForm'
import AddRoomForm from './components/TaskList/addRoomForm'

import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'






const App = () => {

  const [bData, setBdata] = useState(
  [
    {
      "name": "Property 1",
      "address": "Vijay Nagar, Indore",
      "rooms": 4,
      "area": "2000 sq ft",
      "color": ""
    },
    {
      "name": "Property 2",
      "address": "Ghatabillod, Dhar",
      "rooms": 2,
      "area": 2,
      "color": ""
    },
    {
      "name": "Property 3",
      "address": "Indorama",
      "rooms": 5,
      "area": 4,
      "color": ""
    }
  ]
)
  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/OwnerDashboard' element={<Owner data={bData} />} />
        <Route path='/add-new-property' element={<AddPropertyForm handleChange={setBdata} />} />
        <Route path='/add-new-room' element={<AddRoomForm />} />
      </Routes>

    </>
  )
}

export default App