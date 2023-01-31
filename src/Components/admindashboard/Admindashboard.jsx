import React from "react";
import AddMember from "../../pages/Addmember";
import BlogPanel from "../../pages/Blogpanel";
import Logout from "../../pages/Logout";
import MemberList from "../../pages/Memberlist";
import ReceivedMessages from "../../pages/Receivedmessages";

function AdminDashboard() {
return(
    <div>
        
            <AddMember/>
            <MemberList />
            <ReceivedMessages />
            <BlogPanel />
            <Logout />
    </div>
)
}

export default AdminDashboard

