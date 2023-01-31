import React from 'react'
import { useState } from 'react';
import notesdata from './notes_data.json';
import { NavLink } from "react-router-dom";
import '../userdashboard/Userdashboard.css'
import Notebar from './Notebar';

export default function Notes() {
  const [notes, setNotes] = useState(notesdata);
  const [searchNote, setSearchNote] = useState("");


  return (
    <div className='notes_section'>
      <Notebar />
      <input type="text" placeholder="Search by title" onChange={event =>{setSearchNote(event.target.value)}}  />
        {notes.filter((note)=>{
             if (searchNote == "") {
              return note
             } else if (note.note_title.toLowerCase().includes(searchNote.toLowerCase())) {
              return note
            }
             }).map((note)=>{
          return(
            <div className='note_div'>
            <h2>{note.note_title}</h2>

            <p>{note.note_date}</p>
            <button ><NavLink to={`/userdashboard/notepage/${note.id}`}>Show</NavLink> </button>

          </div>
          )
        })}
    </div>
  )
}
