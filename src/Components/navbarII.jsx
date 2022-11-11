import React, {useState} from "react";
import {NavLink} from "react-router-dom"
import logo from '../Pictures/logo.png';

function NavbarII() {

    const [nav, setnav]= useState(false);
    return(
        <div>
            <nav className={nav ? "nav active" : "nav"}>
                <NavLink to='/'>
                <img src={logo} alt="" />
                </NavLink>

                <ul className="menu">
                <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarII