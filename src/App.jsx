import React, { useState } from 'react'
import Login from './components/Auth/Login'
import Owner from './components/Dashboard/Owner'
import NewBuildingTask from './components/TaskList/NewBuildingTask'
import NewRoomTask from './components/TaskList/NewRoomTask'
import { bData } from './Data/data'
import {createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import NewTenant from './components/TaskList/NewTenant'



const App = () => {

  const [data , setData] = useState(bData)



  return (
    <>
        <Login />
        <Owner data={data} />
        <NewBuildingTask handleChange={setData} /> */

        <NewRoomTask />
        <NewTenant/>
    </>
  )
}

export default App