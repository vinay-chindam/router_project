import React, { useState } from 'react'
import toast from 'react-hot-toast';
//import {AiOutlineEye,AiOutlineEyevisible} from "react-icons/ai"
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function SignupForm({setIsLoggedIn}) {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""

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
        if(formData.password !=formData.confirmPassword){
            toast.error("passwords don't match")
            return
        }
        setIsLoggedIn(true)
        const accountData={...formData}
        console.log(accountData)
        navigate('/dashboard')
        toast.success("Account created successfully")

        
    }
  return (
    <div>
        <div>
            <button>
                student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            <div>
            <label>
                <p>First Name<sup>*</sup></p>
                <input
                required
                type='text'
                name="firstname"
                onChange={changeHandler}
                placeholder='enter your first name'
                value={formData.firstname}
                
                
                />
            </label>

            <label>
                <p>Last<sup>*</sup></p>
                <input
                required
                type='text'
                name="lastname"
                onChange={changeHandler}
                placeholder='enter your last name'
                value={formData.lastname}
                
                
                />
            </label>

            </div>

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
                Create Password<sup>*</sup>
                </p>
                <input
                required
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={changeHandler}
                placeholder='enter password'
                name="password"/>

            <span onClick={()=>{
                        setShowPassword((prev)=> !prev)
                    }}>
                        {showPassword ?(<AiOutlineEye />):(<AiOutlineEyeInvisible />)}
            </span>
            
        </label>

        <label>
            <p>
                confirm password<sup>*</sup>
                </p>
                <input
                required
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={changeHandler}
                placeholder='confirm password'
                name="confirmPassword"/>
                <span onClick={()=>{
                        setShowPassword((prev)=> !prev)
                    }}>
                        {showPassword ?(<AiOutlineEye />):(<AiOutlineEyeInvisible />)}
            </span>
            
        </label>
        <button>Create Account</button>
            
        </form>
    </div>
  )
}
