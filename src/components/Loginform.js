import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'

export default function Loginform({setIsLoggedIn}) {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        email:"",password:""
    })
    function changeHandler(event){
        setFormData((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))
    }

    const [showPassword,setShowPassword]=useState(false)
    function submitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("logged in")
        navigate("/dashboard")

        

    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email address<sup>*</sup>
                </p>
                <input
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='enter email id'
                name="email"/>
            
        </label>

        <label>
            <p>
                password<sup>*</sup>
                </p>
                <input
                required
                type={showPassword ?("text"):("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='enter password'
                name="password"/>

        <span onClick={()=>{
                                setShowPassword((prev)=> !prev)
                            }}>
                                {showPassword ?(<AiOutlineEye />):(<AiOutlineEyeInvisible />)}
                    </span>
            <Link to="#">
            <p>
                Forgot password
            
            
            </p></Link>
            
        </label>
        <button>
            Sign In
        </button>
    </form>
  )
}
