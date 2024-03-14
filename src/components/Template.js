import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/Loginform'

export default function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
    <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>
        {
            formtype==="signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/> ) :
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
        }
        <div>
            <div></div>
            <p>or</p>
            <div></div>

        </div>
        <button>Signup with google</button>
        <div>
            <img src={frameImage}
                alt='pattern'
                width={555}
                height={504}
                loading="lazy"/>

            <img src={image}
                alt='pattern'
                width={555}
                height={504}
                loading="lazy"/>
        </div>
    </div>
  )
}
