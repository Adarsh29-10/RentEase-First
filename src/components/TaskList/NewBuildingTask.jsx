import React, { useState } from 'react'
import Header from '../others/Header'
// import { data } from '../../Data/data'

const NewBuildingTask = ({handleChange}) => {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [rooms,setRooms] = useState("")
    const [area, setArea] = useState("")


    let handelSubmit = (event) =>{
        event.preventDefault();
        console.log(rooms);
        const newData = {
            "name": name,
            "address": address,
            "rooms": rooms,
            "tenants": area,
            "color": ""
          }

          handleChange(prev => [...prev, newData])
        //   data.push(a);
          console.log(a);
    }


    return (
        <div className='overflow-hidden'>
            <Header />

            <div className='  p-20'>

            <h1 className='text-4xl font-bold mb-4'>Add New Building</h1>
                <div className=' w-[90%] flex flex-col items-center justify-center '>

                 

                    <form onSubmit={handelSubmit} className=' w-full flex flex-col   ' >

                        <div className='  flex items-center justify-between shrink-0'>
                            <label htmlFor="name" className='text-xl font-semibold'>Property Name</label>
                            <input 
                                className='placeholder-gray-500 w-[80%] border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                                placeholder='Enter Building Name:' 
                                id='name'
                                value={name}
                                onChange={(e)=>{setName(e.target.value)}}
                            />
                        </div>
                       
                        <div className='  flex items-center justify-between'>
                            <label htmlFor="name" className='text-xl font-semibold'>Address</label>
                            <input 
                                className='placeholder-gray-500 w-[80%] border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                                placeholder='Enter Address' 
                                id='name'
                                value={address}
                                onChange={(e)=>{setAddress(e.target.value)}}
                            />
                        </div>

                        <div className='  flex items-center justify-between'>
                            <label htmlFor="name" className='text-xl font-semibold'>Total Rooms</label>
                            <input 
                                className='placeholder-gray-500 w-[80%] border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                                placeholder='Enter Total Number Of Rooms' 
                                id='name'
                                value={rooms}
                                onChange={(e)=>{setRooms(e.target.value)}}
                            />
                        </div>

                        <div className='  flex items-center justify-between'>
                            <label htmlFor="name" className='text-xl font-semibold'>Total Area</label>
                            <input 
                                className='placeholder-gray-500 w-[80%] border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                                placeholder='Enter Total Area of Property' 
                                id='name'
                                value={area}
                                onChange={(e)=>{setArea(e.target.value)}}
                            />
                        </div>
                       
                       <div className='w-full flex justify-end gap-3'> 
                            <button className='bg-black text-white w-40 rounded-xl font-semibold py-2 my-4 text-sm  hover:bg-gray-400 '>Reset</button>
                            
                            <button className='bg-black text-white w-40 rounded-xl font-semibold py-2 my-4 text-sm  hover:bg-gray-400'>Submit</button>
                            
                       </div>
                        
                    </form>
                </div>
                
            </div>
            
        </div>
    )
}

export default NewBuildingTask