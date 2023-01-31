import React from "react";

function EditForm(props) {
    return(props.trigger) ? (
        <div className="">
            <div className="">
                <button className="close-button" onClick={() =>{
                    props.setTrigger(false)} 
                }>X</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default EditForm