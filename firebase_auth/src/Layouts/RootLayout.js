import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <header>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/Signin">SignIn</NavLink>
                <NavLink to="/Signup">SignUp</NavLink>
            </nav>
        </header>
        <Outlet />
    </div>
  )
}
