import React from "react";
import {NavLink} from "react-router-dom"
import logo from '../Pictures/logo.png';

function NavbarII() {

    return(
        <div>
            <nav className="navII">
                <NavLink to='/'>
                <img src={logo} alt="" />
                </NavLink>

                <ul className="">
                <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarII