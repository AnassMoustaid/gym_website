import React, {useRef, useState} from "react";
import logo from '../../Pictures/logo.png'
import { NavLink, Link } from "react-router-dom";
import '../userdashboard/Userdashboard.css'

function Notebar() {
    const [open, setOpen] = useState(false);
    const listRef = useRef();
    const nameRef = useRef();

    window.addEventListener('click',(e)=>{
        if (e.target !== listRef.current && e.target !== nameRef.current) {
            setOpen(false);
        }
    } )
  
    return(
        <div className="notebar">
            <nav className="notes_navbar">
                <img src={logo} alt="logo" />
                    <span><Link to="/userdashboard/createnote"><p>Create Note</p> </Link></span>
                    <span><Link to="/userdashboard/notes"><p>Note List</p> </Link></span>
                    <p  onClick={()=>setOpen(!open)}
            ref={nameRef}> First Last </p>
            </nav>

            {
                open && (
                <div ref={listRef} className="profilebox_info">
                    <ul> 
                        <h3>First Last</h3>
                        <hr />
                        <li><NavLink to="/userdashboard/profile">Profile</NavLink></li>
                        <li>Logout</li>
                    </ul>
                </div>)
            }

           
        </div>
       
        
    )
}

export default Notebar