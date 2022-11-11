import React from "react";

function FeatureBox(props) {
    return(
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.picture} alt="" />
            </div>

            <div className="a-b-text">
                <h2>{props.title}</h2>
                <p>Just some text here to fill up space</p>

            </div>
        </div>
    )
}

export default FeatureBox;