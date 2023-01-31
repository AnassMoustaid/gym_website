import React, { useState, useEffect}from "react";
import { NavLink, useParams } from "react-router-dom";
import EditableNote from "./Editablenote";
import notesdata from './notes_data.json';
import PopupModal from "./PopupModal";
import '../userdashboard/Userdashboard.css'
import Notebar from "./Notebar";




function NotePage(){
    const [notes, setNotes] = useState(notesdata);
    const [note, setNote] = useState(null);
    const [editNote, setEditNote] = useState(null);
    const [deleteNote, setDeleteNote] = useState(false);
    
    let singlenote_id  = useParams();
    
    useEffect(() => {
      let afterNoteFilter =  notes.filter((item)=>{
        return item.id == singlenote_id.id
    });
    setNote(afterNoteFilter[0])
    }, [])

    const handleEditClick = (event, note) =>{
      event.preventDefault();
      setEditNote(note.id); 
    }

    const handleCancelClick = () => {
      setEditNote(null);
    }


    
    return(
        <div className="note_page">
          <Notebar />
           
             {notes.map((note)=>{
          return(
            <> 
            {editNote === note.id ? <EditableNote note={note} handleCancelClick={handleCancelClick} /> :  <div className='note_div'>
            <h2>{note.note_title}</h2>
            <p>{note.note_content}</p>
            <p>{note.note_date}</p>
            <button onClick={()=>{
              handleEditClick(event, note)
            }}>Edit </button>
             <button onClick={()=>{
              setDeleteNote(true)
            }}>Delete </button>

        <PopupModal trigger={deleteNote} setTrigger={setDeleteNote}>
          <h1>Are you sure that you want to delete this note?</h1>
          <button>Confirm</button> <button>Cancel</button>
        </PopupModal>
          </div>}
            
            </>
          )
        })}
       
        <button><NavLink to='/notes'>Go back</NavLink></button>
        </div>
    )
}

export default NotePage