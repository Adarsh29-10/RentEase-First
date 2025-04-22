import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RoomView from './RoomView.jsx';
import RCard from '../components/others/Room-card/RCard.jsx'
import AddRoomModal from '../components/Modals/RoomModal/RoomModal.jsx';
import { Navigate, useNavigate, useParams } from 'react-router-dom';


const Rooms = ({data}) => {

    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate('/add-new-room')
    }
    
    const {id} = useParams();
    const [property, setProperty] = useState('');
    const [IsModelOpen, setIsModelOpen] = useState(false);
    
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
    <div className='h-screen overflow-x-hidden max-w-full mx-auto py-8 px-4 '>
        <div className= 'bg-transparent mb-8 flex align-center justify-between w-full'>
            <h1 className='font-bold text-3xl font-sans'>Rooms Dashboard {property.name}
            </h1>
            <button 
                onClick={() => setIsModelOpen(true)}
                className="flex items-center bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-xl text-white transition-colors"
            >Add new room</button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">

            {/* nav */}
           

            
                <h1 className='font-bold text-3xl font-sans'>
                    {/* {id} */}
                </h1>

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
           
            {IsModelOpen && < AddRoomModal close={()=> setIsModelOpen(false)} />}
            {/* <RoomView /> */}


        </div>
       
         
        {/* <div onClick={handelNavigate}  className='absolute'><i className="fixed fa-solid fa-circle-plus text-8xl bottom-12 right-12 "></i></div>   */}
    </div>
  )
}

export default Rooms

