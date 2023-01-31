import React from "react";
import Notebar from './Notebar';
import NotePage from "./Notepage";
import CreateNote from "./Createnote";
import ProfileInfo from "./Profileinfo";
import Notes from "./Notes";


function UserDashboard(){
    return(
        <div>
            <Notebar>
                <CreateNote />
                <Notes/>
                <NotePage/>
                <ProfileInfo />
            </Notebar>
        </div>
    )
}

export default UserDashboard