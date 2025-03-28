import React, { useEffect, useState } from 'react'
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


import axios from "axios";



const App = () => {
  
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    const fetchProperties = async () => {
      try{
        setLoading(true);
        setError(false);
        const response = await axios.get('/api/properties');
        console.log(response.data.properties);
        setData(response.data.properties);
       
        setLoading(false);
      } catch(error){
        setError(true);
        setLoading(false);
      }
    }
    {loading && <h1>Loading...</h1>}
    {error && <h1>Something went wrong while fetching properties.</h1>}
    
     
    fetchProperties();
    
  }, []);
  
  
  

  return (
    <>
      
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/TenantRegistration' element={<TenantReg />} />
        <Route path='/OwnerRegistration' element={<OwnerReg />} />
        <Route path='/OwnerDashboard' element={<Owner data={data}  />} />
        <Route path='/TenantDashboard' element={ <Tenant/> } />
        <Route path='/add-new-property' element={<AddPropertyForm handleChange={setData} />} />
        <Route path='/manage-rooms/:id' element={<Rooms data={data}/> } />
        <Route path='/add-new-room' element={<AddRoomForm />} />
      </Routes>
      
    </>
  )
}

export default App


// const [bData, setBdata] = useState(
//   [
//     {
//       "name": "Property 1",
//       "address": "Vijay Nagar, Indore",
//       "rooms": 4,
//       "area": "2000 sq ft",
//       "color": "",
//       "redirectTo": '/manage-rooms' 
//     },
//     {
//       "name": "Property 2",
//       "address": "Ghatabillod, Dhar",
//       "rooms": 2,
//       "area": "1500 sq ft",
//       "color": ""
//     },
//     {
//       "name": "Property 3",
//       "address": "Indorama",
//       "rooms": 5,
//       "area": "1600 sq ft",
//       "color": ""
//     }
//   ]