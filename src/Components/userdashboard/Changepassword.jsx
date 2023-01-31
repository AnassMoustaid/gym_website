import React from "react";
import '../userdashboard/Userdashboard.css'
import Notebar from "./Notebar";

function ChangePassword() {
    return(
        <div className="change_password">
            <Notebar />
            <h2>Change Password </h2>
          <p>  Old Password: <input type="text" /> </p>
          <p>  New Password: <input type="text" /></p>
          <p> Confirm New Password: <input type="text" /></p>
          <p> <button>Confirm Password Change</button></p>
        </div>
    )
}

export default ChangePassword