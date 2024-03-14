import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"


export default function Login({setIsLoggedIn}) {
  return (
    
        <Template
        title="welcome back"
        desc1="build skills"
        desc2="educatioin to future proof your career"
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        />
    
  )
}
