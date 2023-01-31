import React from "react";
import "./auth.css";
import aboutimage from '../../Pictures/about.png'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div id="login">
      <div className="user-login">
      <img src={aboutimage} alt="" id="admin_image" />
      </div>

      <div className="admin-login">
        <h1>User Portal</h1>
        <form action="">
          <input type="email" placeholder="Type Your E-mail" required />
          <input type="password" placeholder="Type Your Password" required />
          <a href="#" className="login-btn">
            LOGIN
          </a>
          <a className="mdp"><Link to='/forgotpassword'>  Mot de passe oublié? </Link></a>
        </form>
      </div>
    </div>
  );
}

export default Login;
