import React from "react";

function ForgotPassword() {
    return(
        <div className="forgot_password">
            <h1>Forgot Password</h1>

            <input type="email" placeholder="Type in your email"  />
            <br />
            <button className="btn">Submit</button>
        </div>
    )
}

export default ForgotPassword