import React from "react";
import Sidebar from "../Components/Sidebar";
import '../Components/admindashboard/Admindashboard.css';


function Logout() {
    return(
        <Sidebar>
        <div>
            <h1>Are you sure you want to logout?

            </h1>
        </div>
        </Sidebar>
    )
}

export default Logout