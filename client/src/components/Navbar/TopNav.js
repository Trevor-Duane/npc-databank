import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import './Navbar.css'

function TopNav() {
    return (
        <div className="main-navbar sticky-top">
            <div className="main-navbar-left">
                <img className="img-fluid" src={logo} height="85" width="85" alt="NPC logo" />
                <span>National Population Databank</span>
            </div>
            {/* <div className="main-navbar-right">
                <FaUserCircle size={28} />
                <span>Login</span>
            </div> */}
        </div>
    )
}

export default TopNav