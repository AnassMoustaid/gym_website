import React from "react";
import '../userdashboard/Userdashboard.css'

function EditableNote({note, handleCancelClick}){
    return(
        <div className='note_div'>
            <textarea name="" id="" cols="50" rows="3">{note.note_title}</textarea>
            <br />
            <br />
            <textarea name="" id="" cols="100" rows="30"><p>{note.note_title}</p></textarea>
            <p>{note.note_date}</p>
            <div>
                <button>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </div>
        </div>
    )
}

export default EditableNote