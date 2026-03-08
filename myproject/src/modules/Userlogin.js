import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Login.css';
import { FaUserCircle } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
  import { ToastContainer, toast } from 'react-toastify';
function Userlogin() {
    const navigate=useNavigate();

    const[email, setemail]=useState("shikha@gmail.com"); 

    const changeemail=(a)=>{
        setemail(a.target.value);

    }
    const[pass ,setpass]=useState("Rashi@2429");

    const changepass=(a)=>{
        setpass(a.target.value);
    }

    const myform=()=>{
        if(email===""|| pass==="")
        {
            toast.error("email or password is blank",{position:'top-left',autoClose:2000,theme:"dark"});
        }
        else{
            toast.success("welcome to our website",{position:'top-left',autoClose:2000,theme:"dark"});
            setTimeout(() => {
                navigate("/Products");
            }, 2000);
        }

    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 bg-info mt-5 p-3'>
                    <div className='container-fluid'>
                        <ToastContainer/>
                    <div className='row justify-content-center'>
                        <div className='col-1 text-center'>
                            <span className='h1'> <FaUserCircle /></span>
                        </div>
                        <div className='col-12 text-center p-3'>
                            <p className='h3'>User Login</p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" value={email} onInput={changeemail}></input>
                            <MdOutlineMail className='icon'/>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={pass} onInput={changepass}></input>
                            <RiLockPasswordFill className='icon'/>
                        </div>
                    </div>
                    <div className='col-md-12 text-center'>
                        <div className="mb-3">
                            <input type="button" className="btn h2" value="login" onClick={myform} />
                        </div>
                        <div className='register-link'>
                            <p> Donot have an account?<Link to="register" className='btn ms-3 text-white'>Register</Link></p>

                        </div>
                    </div>
                </div>  </div>
        </div>

        </div>
    )
}
export default Userlogin