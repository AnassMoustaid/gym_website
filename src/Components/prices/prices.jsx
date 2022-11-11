import React from "react";
import './prices.css'

function Prices() {
    return(
        <div id="prices">

                <div className="plan basic">
                <h3>Basic Plan</h3>
                <div className="price"><span>$</span>30<span>month</span></div>
                <div className="list">
                <p>Personal Training </p>
                <p>Cardio Exercise</p>
                <p>Weight Lifting</p>
                <p>Diet Plan</p>
                <p>Overall Results</p>
                </div>
            </div>

            <div className="plan advanced">
                <h3>Advanced Plan</h3>
                <div className="price"><span>$</span>60<span>month</span></div>
                <div className="list">
                <p>Personal Training </p>
                <p>Cardio Exercise</p>
                <p>Weight Lifting</p>
                <p>Diet Plan</p>
                <p>Overall Results</p>
                </div>
            </div>

            <div className="plan">
                <h3>Premium Plan</h3>
                <div className="price"><span>$</span>90<span>month</span></div>
                <div className="list">
                <p> Personal Training </p>
                <p>Cardio Exercise</p>
                <p>Weight Lifting</p>
                <p>Diet Plan</p>
                <p>Overall Results</p>
                </div>
            </div>
        </div>
    )
}

export default Prices