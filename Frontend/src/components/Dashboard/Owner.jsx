import React, { useState } from 'react'
import Header from '../others/Header.jsx'
import BuildingCardDiv from '../others/Property-cards/BuildingCardDiv.jsx'
const Owner = ({data}) => {


  return (
    <>
        
      
        <Header/>
        
        <BuildingCardDiv data={data} />
       
      
    </>
  )
}

export default Owner


