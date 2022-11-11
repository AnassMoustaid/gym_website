import React from "react";
import "../../../index.css"
import fpicture1 from "../../../Pictures/1.svg"
import fpicture2 from "../../../Pictures/2.svg"
import fpicture3 from "../../../Pictures/3.svg"
import {NavLink} from "react-router-dom"
import NavbarII from "../../navbarII";


function BlogList() {
    return(
        <div>
            <NavbarII />
            <div className="blog-container">
                <div className="b-box-blog">
                    <div className="b-img">
                        <img src={fpicture1} alt="" />
                    </div>

                    <div className="b-text">
                        <h2>First Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, amet?</p>
                        <button className="readmore_button"><NavLink to='/blogarticle'>Read More </NavLink></button>
                    </div>

                    
                </div>

                <div className="b-box-blog">
                    <div className="b-img">
                    <img src={fpicture2} alt="" />
                    </div>

                    <div className="b-text">
                        <h2>Second Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, amet?</p>
                        <button className="readmore_button"><NavLink to='/blogarticle'>Read More </NavLink></button>
                    </div>
                </div>

                <div className="b-box-blog">
                    <div className="b-img">
                    <img src={fpicture3} alt="" />
                    </div>

                    <div className="b-text">
                        <h2>Third Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, amet? </p>
                        <button className="readmore_button"><NavLink to='/blogarticle'>Read More </NavLink></button>
                    </div>
                </div>

                <div className="b-box-blog">
                    <div className="b-img">
                    <img src={fpicture3} alt="" />
                    </div>

                    <div className="b-text">
                        <h2>Third Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, amet? </p>
                        <button className="readmore_button"><NavLink to='/blogarticle'>Read More </NavLink></button>
                    </div>
                </div>

                <div className="b-box-blog">
                    <div className="b-img">
                    <img src={fpicture3} alt="" />
                    </div>

                    <div className="b-text">
                        <h2>Third Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, amet? </p>
                        <button className="readmore_button"><NavLink to='/blogarticle'>Read More </NavLink></button>
                    </div>
                </div>

                <div className="b-box-blog">
                    <div className="b-img">
                    <img src={fpicture3} alt="" />
                    </div>

                    <div className="b-text">
                        <h2>Third Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, amet? </p>
                        <button className="readmore_button"><NavLink to='/blogarticle'>Read More </NavLink></button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default BlogList