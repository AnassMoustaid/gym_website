import React from "react";
import '../userdashboard/Userdashboard.css'
import Notebar from "./Notebar";

function CreateNote() {
  return (
    <div className="create-note">
      <Notebar />
      <form action="" >
        <h1>Create your note</h1>
      <input type="text" placeholder="Title" />
      <textarea type="text" placeholder="Content" />
      <button>Save</button>
      </form>
    </div>
  );
}

export default CreateNote;
