import React, { useState } from 'react'
import Header from '../others/Header'

const AddRoomForm = () => {

    let handelSubmit = (event) =>{
        event.preventDefault();
    }


    return (
        <div>
            <Header />

            <div className='  p-20'>
                <h1 className='text-4xl mb-4 font-bold underline '>Add New Room</h1> 
                
                <div className='w-[90%] flex flex-col items-center justify-center '>

                    <form onSubmit={handelSubmit} className='w-full flex flex-col   ' >
                        
                        <div className='flex items-center justify-between'>
                            <label className='font-bold text-2xl'>Room Name:</label>
                            <input 
                            className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-xl text-sm px-2 py-2 my-4' 
                            placeholder='Room Name' 
                            name='name'
                            onChange={(e)=>{}}
                        ></input> 
                        </div>
                        <div className='flex items-center justify-between'>
                            <label className='font-bold text-2xl'>Room Number:</label>
                            <input 
                            className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-xl text-sm px-2 py-2 my-4' 
                            placeholder='Room number' 
                            name='number'
                            onChange={(e)=>{}}
                        ></input> 
                        </div>
                        <div className='flex items-center justify-between'>
                            <label className='font-bold text-2xl'>Tenant status:</label>
                            <input 
                            className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-xl text-sm px-2 py-2 my-4' 
                            placeholder='Tenant status' 
                            name='status'
                            onChange={(e)=>{}}
                        ></input> 
                        </div>
                        <div className='flex items-center justify-between'>
                            <label className='font-bold text-2xl'>Room Size:</label>
                            <input 
                            className='placeholder-gray-500 border-2 border-black outline-none w-[80%] rounded-xl text-sm px-2 py-2 my-4' 
                            placeholder='Room Size' 
                            name='size'
                            onChange={(e)=>{}}
                        ></input> 
                        </div>
                        
                        <div className='flex items-center justify-between'>
                            <label className='font-bold text-2xl'>Room Price:</label>
                        <input 
                            className='placeholder-gray-500 border-2 w-[80%] border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                            placeholder='Room Price' 
                            name='address'
                        ></input>
                        </div>

                    

                        <div className='flex items-center  justify-end gap-4'>

                            <button className='bg-black text-white rounded-xl font-semibold w-40 py-2 my-4 text-sm  hover:bg-gray-400'>Reset</button>

                            <button className='bg-black w-40 text-white rounded-xl font-semibold py-2 my-4 text-sm  hover:bg-gray-400'>Submit</button>

                        </div>
 
                    </form>
                </div>
                
            </div>
            
        </div>
    )
}

export default AddRoomForm