import React from "react";

function ResetPassword() {
    return(
        <div className="reset_password">
            <h1>Reset Password</h1>
            
                <input type="text" placeholder="Type in your new password " />
            
                <input type="text" placeholder="Confirm your new password" />
            
            <button>Submit</button>
        </div>
    )
}

export default ResetPassword