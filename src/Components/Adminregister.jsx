import React from "react";
import offerimage from '../Pictures/offer.png';
import adminlogo from '../Pictures/logo.png'

function AdminReegister(){
    return(
        <div id="login">
            
        <div className="user-login">
        <img src={offerimage} alt="" id="admin_image" />
        </div>

        <div className="admin-login">
    <form action="">
        <img src={adminlogo} alt="" id="admin_logo" />
    <h1>Register as an admin</h1>
    <div><input type="name" placeholder="First name" />  </div>
    <div><input type="name" placeholder="Last name" /></div>
    <div> <input type="name" placeholder="Type your phone number" /></div>
    <div> <input type="email" placeholder="Type Your E-mail" required /></div>
    <div> <input type="password" placeholder="Type Your Password" required /></div>
      <a href="#" className="login-btn">
        Register
      </a>
    </form>
  </div>
    </div>
    )
}

export default AdminReegister