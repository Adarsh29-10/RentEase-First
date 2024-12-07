import React, { useEffect } from 'react'
import Card from './Card'
import AddBuildingCard from './AddBuildingCard'
// import { data } from '../../Data/data'

const BuildingCard = ({data}) => {

  // if (!data){
  //   return (
  //     <div>Load</div>
  //   )
  // }

  // console.log(data);
  

  return (
    <>
      <div className=' flex mt-10 mb-24 overflow-x-auto'>

        {data?.map((e) => <>{<Card name={e.name} address={e.address} rooms={e.rooms} area={e.area} />}</>)}


        <AddBuildingCard />


      </div>

    </>



  )
}

export default BuildingCard