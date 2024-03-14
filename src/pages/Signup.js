import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

export default function Signup({setIsLoggedIn}) {
  return (
    <Template
        title="join the millions"
        desc1="build skills"
        desc2="educatioin to future proof your career"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
  )
}
