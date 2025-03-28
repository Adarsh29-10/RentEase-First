import React from 'react'
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


 {/* <BuildingDropdown name="Building 1"/>
        <BuildingDropdown name="Building 2"/> */}