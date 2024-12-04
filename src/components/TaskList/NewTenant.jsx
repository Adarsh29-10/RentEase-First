const NewTenant = () =>{
    return(
        <>
            <div className="bg-red-400 flex flex-col h-screen items-center justify-center">
            <h1>Add New Tenant</h1>
            <div className="bg-yellow-200">
                <form action="">
                    <div>
                        <label>Tenant Name:</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label>Contact Number:</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label>Email Id:</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label>Id proof:</label>
                        <input type="text" />
                    </div>
                    
                    
                    
                </form>
            </div>
            </div>
        </>
    )
}


export default NewTenant;