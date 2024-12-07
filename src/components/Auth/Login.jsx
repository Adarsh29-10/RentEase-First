import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

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
                <p className='flex justify-start'>Welcome back,</p>
                <h1 className='text-5xl font-mono mb-12'>Login to RentEase</h1>
                </div>
                
                <form 
                    className='bg-gray-100 border-2 border-gray-400 shadow-md w-[30rem]  py-8  px-8 flex flex-col text-3xl rounded-xl'
                    onSubmit={(e)=>submitHandler(e)} 
                >

                    <input 
                        type="email" 
                        className=' text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                        placeholder='Enter Email' 
                        onChange={(e)=>{setEmail(e.target.value)}}  
                        value= {email} 
                        required
                    /> 
                    <input 
                        type="password" 
                        className='text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                        placeholder='Enter Password'
                        value= {password}
                        onChange={(e)=>setPassword(e.target.value)}  
                        required
                    />
                    <button className='bg-pink-700 text-white rounded-xl font-semibold py-2 my-4 text-sm'>Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login