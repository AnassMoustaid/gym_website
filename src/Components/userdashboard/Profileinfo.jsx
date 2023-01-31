import React from "react";
import { Link } from "react-router-dom";
import '../userdashboard/Userdashboard.css'
import Notebar from "./Notebar";

function ProfileInfo(){
    return(
        <div className="profile_info">
            <Notebar />
            <h1>About</h1>
            <p>Name:</p> <input type="text" placeholder="First Last" disabled />
            <p>Phone Number: </p> <input type="text" placeholder="xx xx xx xx xx" disabled/>
            <p>E-mail:</p> <input type="email" placeholder="firstlast@gmail.com" disabled />
            <p>Type of subscription: XXXX </p>
            <p>End of subscription: XX - XX - XX </p>
            <button ><Link to='/userdashboard/changepassword'>Change Password</Link> </button>
        </div>
    )
}

export default ProfileInfo