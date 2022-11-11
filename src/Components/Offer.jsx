import React from "react";
import { NavLink } from "react-router-dom";

function Offer(){
    return(
        <div id="offer">
            <div className="pr-heading">
                <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
                <p className="details">Some random details</p>
                <div className="pr-btns">
                    <a href="#" className="pr-btn"><NavLink to='/prices'>JOIN NOW</NavLink></a>
                </div>
            </div>
        </div>
    )
}

export default Offer;