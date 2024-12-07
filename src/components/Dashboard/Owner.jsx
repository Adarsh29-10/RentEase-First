import React from 'react'
import Header from '../others/Header'
import CardsAll from '../others/CardsAll'
import BuildingCard from '../others/BuildingCard'
import BuildingDropdown from '../others/BuildingDropdown'

const Owner = ({data}) => {
  return (
    <>
      <div>
        <Header/>
        <BuildingCard data={data} />
        {/* <BuildingDropdown name="Building 1"/>
        <BuildingDropdown name="Building 2"/> */}
      </div>
    </>
  )
}

export default Owner