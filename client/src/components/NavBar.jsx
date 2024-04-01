import React from 'react'
import "./NavBar.css"
import Logo from "./Logo.jpeg";
import { Link } from "react-router-dom"
import {IconButton } from "@mui/material"
import { MagnifyingGlass} from "phosphor-react"
const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div className='header'>
      <div className='n-leftSide'>
        <img src={Logo} alt="" />
      </div>
      <div className='n-middleSide'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Community">Community</Link></li>
          <li><Link to="/AboutUs">AboutUs</Link></li>
        </ul>
      </div>
      <div className='n-rightSide'>
        <IconButton>
          <MagnifyingGlass size={28} />
        </IconButton>
      <button className='white_btn' onClick={handleLogout}>Log out</button>
       
      </div>
    </div>
  )
}

export default NavBar;