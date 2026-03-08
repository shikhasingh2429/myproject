import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link ,useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';


function Registerpage() {
    const navigate=useNavigate();

    const {register, handleSubmit,formState: {errors}}=useForm()

    const myregister=(e)=>{
        console.log(e);
        alert("welcome");
        navigate("/Login");
    }

    return (
        <form onSubmit={handleSubmit(myregister)}>
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8 bg-info '>
                    <div className='container-fluid mt-5'>
                        <div className='row justify-content-center'>
                            <div className='col-1' text-center>
                                <span className='h1'> <FaUserCircle /></span>

                            </div>
                            <div className='col-12 text-center p-3'>
                                <p className='h3'>User Registor Page</p>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control"{...register("email",{required:true})} />
                                    {errors.email &&<p className='text-danger'>email is required</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" {...register("fullname",{required:true})}/>
                                    {errors.fullname &&<p className='text-danger'>full name is required</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Phone No</label>
                                    <input type="text" className="form-control"{...register("phoneno",{required:true})} />
                                    {errors.phoneno &&<p className='text-danger'>phone no is required</p>}

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Age</label>
                                    <input type="number" className="form-control"{...register("age",{required:true})} />
                                    {errors.age &&<p className='text-danger'>age is required</p>}                                
                                </div>
                            </div>
                        
                        <div className='col-md-8'>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" {...register("pass",{required:true,minLength:10,maxLength:15})}/>
                                {errors.pass?.type==="required" &&<p className='text-danger'>password is required</p>}
                                {errors.pass?.type==="minLength" &&<p className='text-danger'>10 minLength is required</p>}
                                {errors.pass?.type==="maxLength" &&<p className='text-danger'>15 maxLength is required</p>}

                            </div>
                        </div>
                        <div className='col-md-12 text-center'>
                            <div className="mb-6">
                                <input type="submit" className="btn" value="Register" />
                                <Link to="/Login" className='btn ms-3 text-white'>Login</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
</div>
</form>
    )
}
export default Registerpage