import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast"

export default function Navbar(props) {
    let isLoggedIn=props.isLoggedIn
    let setIsLoggedIn=props.setIsLoggedIn

  return (
    <div className='flex justify-evenly'>

        <Link to="/">
            <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
        </Link>
        <nav >
            <ul className='flex gap-3'>
                <li>
                    <Link to="/a">Home  </Link>
                </li>
                <li>
                    <Link to="/a">About </Link>
                </li>
                <li>
                    <Link to="/a"> Contact</Link>
                </li>
                <li>
                    <Link to="/a"> </Link>
                </li>
            </ul>
        </nav>

        <div className='flex  ml-6 gap-5'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button>
                        Signup
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={()=>{
                        setIsLoggedIn(false)
                        toast.success("logged out")
                    }}>
                        Logout
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}
