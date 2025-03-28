import React, { useEffect } from 'react'
import AddBuildingCard from '../Card-AddNew/AddBuildingCard'
import BCard from './BCard'
// import { data } from '../../Data/data'

const BuildingCardDiv = ({data}) => {


  return (
    <>
      <div id='buildingCardDiv' className='h-[30rem] pt-10 flex mt-10 mb-24 overflow-x-auto '>

        {data?.map((e) => <>{<BCard id={e._id} name={e.name} address={e.address} rooms={e.rooms} area={e.area} redirectTo={e.redirectTo}/>}</>)}


        <AddBuildingCard />


      </div>

    </>



  )
}

export default BuildingCardDiv