import React from "react";
import aboutimage from '../Pictures/about.png'

function About() {
    return(
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam dolor facilis quaerat tempore. Harum modi doloribus accusantium non iusto.</p>
                
            </div>
        </div>
    )
}

export default About;