import React, { useState } from 'react'

const Login = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let submitHandler = (e) =>{
        e.preventDefault()
        console.log(email);
        console.log(password);
    }
   
    return (
        
        <div className='h-screen w-screen flex justify-center items-center'>
        
            <div className='h-screen flex flex-col justify-center items-center'>
                <div>
                <p className='flex justify-start'>Welcome back,</p>
                <h1 className='text-5xl font-mono mb-12'>Login to RentEase</h1>
                </div>
                
                <form 
                    className='w-[25rem] py-4  px-3 flex flex-col text-3xl border-4 border-black rounded-xl'
                    onSubmit={(e)=>submitHandler(e)} 
                >

                    <input 
                        type="email" 
                        className='placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                        placeholder='Enter Email' 
                        onChange={(e)=>{setEmail(e.target.value)}}  
                        value= {email} 
                        required
                    /> 
                    <input 
                        type="password" 
                        className='placeholder-gray-500 border-2 border-black outline-none rounded-xl text-sm px-2 py-2 my-4' 
                        placeholder='Enter Password'
                        value= {password}
                        onChange={(e)=>setPassword(e.target.value)}  
                        required
                    />
                    <button className='bg-black text-white rounded-xl font-semibold py-2 my-4 text-sm'>Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login