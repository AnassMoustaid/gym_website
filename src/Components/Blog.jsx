import React from "react";
import fpicture1 from '../Pictures/1.svg';
import fpicture2 from '../Pictures/2.svg';
import fpicture3 from '../Pictures/3.svg';
import { NavLink } from "react-router-dom";

function blog() {
    return(
        <div id="blog">
            <h1>BLOG</h1>
            <div className="b-container">
                <div className="b-box">
                    <div className="b-img">
                        <img src={fpicture1} alt="" />
                    </div>

                    <div className="b-text">
                        <h2>First Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, amet?</p>
                    </div>
                </div>

                <div className="b-box">
                    <div className="b-img">
                    <img src={fpicture2} alt="" />
                    </div>

                    <div className="b-text">
                        <h2>Second Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, amet?</p>
                    </div>
                </div>

                <div className="b-box">
                    <div className="b-img">
                    <img src={fpicture3} alt="" />
                    </div>

                    <div className="b-text">
                        <h2>Third Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, amet? </p>
                    </div>
                </div>
            </div>
            <a href="#" className="blog-btn"><NavLink to='/blogpage'>READ MORE</NavLink></a>
        </div>
        
    )
}

export default blog;