import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OwnerReg = () => {

    const navigate = useNavigate();

    let [name, setName] = useState("")
    let [phone, setPhone] = useState("")
    let [email, setEmail] = useState("")
    let [aadhar, setAadhar] = useState("")
    let [address, setAddress] = useState("")
    let [password, setPassword] = useState("")

    let submitHandler = (e) =>{
        e.preventDefault()
        if (!name || !phone || !email || !aadhar || !addreess || !password) {
            alert("Please fill in all fields");
            return;
        } else if(name=="adarsh" && phone==="1234567890" && email==="aadi@male.com" && aadhar=="12" && address=="abc" && password==="1234"){
            navigate("/");
        } else {
            alert("Invalid credentials");
            
        }

        setName="";
        setPhone="";
        setEmail="";
        setAadhar="";
        setAddress="";
        setPassword="";
    

    }
   
    return (
        
        <div className=' h-screen w-screen flex justify-center items-center'>
        
            <div className=' h-screen flex flex-col justify-center items-center'>
                <div>
                <h1 className='text-5xl font-semibold mb-5'>Owner Registration</h1>
                </div>
                
                <form 
                    className='bg-gray-100 border-2 border-gray-400 shadow-md w-[30rem]  py-8  px-8 flex flex-col text-3xl rounded-xl'
                    onSubmit={(e)=>submitHandler(e)} 
                >

                    <input 
                        type="text" 
                        className=' text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                        placeholder='Enter Name' 
                        onChange={(e)=>{setName(e.target.value)}}  
                        value= {name} 
                        required
                    /> 
                    <input 
                        type="tel" 
                        className='text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                        placeholder='Enter Phone Number'
                        value= {phone}
                        onChange={(e)=>setPhone(e.target.value)}  
                        required
                    />
                    <input 
                        type="email" 
                        className='text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                        placeholder='Enter Email'
                        value= {email}
                        onChange={(e)=>setEmail(e.target.value)}  
                        required
                    />
                    <input 
                            type="text" 
                            className='text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                            placeholder='Enter Aadhar'
                            value= {aadhar}
                            onChange={(e)=>setAadhar(e.target.value)}  
                            required
                        />
                    <input 
                        type="text" 
                        className='text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                        placeholder='Enter Address'
                        value= {address}
                        onChange={(e)=>setAddress(e.target.value)}  
                        required
                    />
                    <input 
                        type="password" 
                        className='text-black placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                        placeholder='Enter Password'
                        value= {password}
                        onChange={(e)=>setAddress(e.target.value)}  
                        required
                    />
                    <button className='bg-pink-700 text-white rounded-xl font-semibold py-2 my-4 text-sm'>Register</button>

                </form>
            </div>
        </div>
    )
}

export default OwnerReg