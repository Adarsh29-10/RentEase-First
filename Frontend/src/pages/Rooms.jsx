import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/others/Header.jsx'
import RoomView from './RoomView.jsx'
import RCard from '../components/others/Room-card/RCard.jsx'
import { Navigate, useNavigate, useParams } from 'react-router-dom';


const Rooms = ({data}) => {

    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate('/add-new-room')
    }
    
    const {id} = useParams();
    const [property, setProperty] = useState('');

    useEffect(()=>{
        const fetchProperties = async () =>{
            try{
                const response = await axios.get(`/api/properties/${id}`);
                console.log(response.data.properties);
                setProperty(response.data.properties);
            } catch(error){
                console.error(error);
            }
        }

        fetchProperties();
    }, [id]);

  return (
    <div className='relative h-screen w-full overflow-x-hidden '>
        <Header />

        <div className=' py-9'>

            <div className='bg-transparent p-7 flex align-center justify-between mt-3  w-full'>
                <h1 className='font-bold text-3xl font-sans'>Rooms of {property.name}
                </h1>
            </div>
                <h1 className='font-bold text-3xl font-sans'>
                    {/* {id} */}
                </h1>

            <div className='flex'>
                <RCard 
                    roomNo = "Room 1" 
                    name="Sharad Tiwari" 
                    contact={9826881580} 
                    tStatus="Family" 
                    bill={"Not Paid"}    
                />

                <RCard 
                    roomNo = "Room 2" 
                    name="Suraj Jain" 
                    contact={7826881684} 
                    tStatus="Bachelor" 
                    bill={"Paid"}    
                />

                <RCard 
                    roomNo = "Room 3" 
                    // name="Kshitij Raghuwanshi" 
                    // contact={9562585485} 
                    // tStatus="Family" 
                    // bill={"Not Paid"}

                    empty="Empty"

                />
                
            </div>
           

            {/* <RoomView /> */}


        </div>
       
        <div onClick={handelNavigate}  className='absolute'><i className="fixed fa-solid fa-circle-plus text-8xl bottom-12 right-12 "></i></div>   

    </div>
  )
}

export default Rooms

// color="bg-green-400"
// color="bg-purple-400"
{/* <div className=' bg-[#FC9E6A] px-5 py-4 mt-2 mx-10 rounded-md '> 
                <div className='flex items-center justify-between '>
                    <h1 className='font-semibold text-5xl'>Room 101</h1>
                    <div><i class="fa-solid fa-caret-down text-2xl "></i></div>
                </div> 

                

                <div className='flex items-center justify-between mx-16 my-4'>
                    <h1 className='font-mono text-xl bg-[#121212] text-white px-3 rounded-xl'>Name: Suresh Jat</h1>
                    <h1 className='font-mono text-xl bg-[#121212] text-white px-3 rounded-xl'>Contact no.: 9876543210</h1>
                    <h1 className='font-mono text-xl bg-[#121212] text-white px-3 rounded-xl'>Status: Family</h1>
                    <h1 className='font-mono text-xl bg-[#121212] text-white px-3 rounded-xl'>Bill Status: Paid</h1>
                </div>
            </div> */}