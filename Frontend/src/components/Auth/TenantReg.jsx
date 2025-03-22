import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const TenantReg = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [phone, setPhone] = useState("");
    const [aadhaar, setAadhaar] = useState("");
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let submitHandler = (e) =>{
        e.preventDefault()
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        } else if(email==="aadi@male" && password==="1234"){
            navigate("/OwnerDashboard");
        } else {
            alert("Invalid credentials");
            
        }

        setEmail="";
        setPassword="";

    }


  return (
    <div className=' h-screen w-screen flex justify-center items-center'>
            
        <div className=' h-screen flex flex-col justify-center items-center'>
            <div>
            
            <h1 className='text-5xl font-semibold mb-5'>Tenant Registeration</h1>
            </div>
            
            <form 
                className='bg-gray-100 border-2 border-gray-400 shadow-md w-[30rem]  py-8  px-8 flex flex-col text-3xl rounded-xl'
                onSubmit={(e)=>submitHandler(e)} 
            >

                <input 
                    type="text" 
                    className=' text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                    placeholder='Enter Full Name' 
                    onChange={(e)=>{setName(e.target.value)}}  
                    value= {name} 
                    required
                /> 

                <input 
                    type="tel" 
                    className=' text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                    placeholder='Enter Phone number' 
                    onChange={(e)=>{setPhone(e.target.value)}}  
                    value= {phone} 
                    required
                /> 

                <input 
                    type="email" 
                    className=' text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                    placeholder='Enter Email' 
                    onChange={(e)=>{setEmail(e.target.value)}}  
                    value= {email} 
                    required
                /> 

                <input 
                    type="text" 
                    className=' text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                    placeholder='Enter Aadhaar number' 
                    onChange={(e)=>{setAadhaar(e.target.value)}}  
                    value= {aadhaar} 
                    required
                /> 

                <input 
                    type="text" 
                    className=' text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                    placeholder='Enter Occupation' 
                    onChange={(e)=>{setOccupation(e.target.value)}}  
                    value= {occupation} 
                    required
                /> 

               
                <select 
                     className=' text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' >
                    <option value="null" disabled selected>Status</option>
                    <option value="Student">Student</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Family">Family</option>
                </select>
  


                <input 
                    type="password" 
                    className='text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                    placeholder='Enter Password'
                    value= {password}
                    onChange={(e)=>setPassword(e.target.value)}  
                    required
                />
                <button className='bg-pink-700 text-white rounded-xl font-semibold py-2 my-4 text-sm'>Register</button>

            </form>
        </div>
    </div>
  )
}

export default TenantReg