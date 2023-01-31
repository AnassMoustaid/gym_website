import React, { useState } from "react";
import {Link, Outlet} from "react-router-dom";

function Sidebar({children}) {
    const [sidebarItem, changeItem] = useState({
        activeTab: null,
        sidebarTabs:[
        {
            path:'/admindashboard/addmember',
            name:'Add Member',
        },

        {
            path:'/admindashboard/memberlist',
            name:'Member List',
        },

        {
            path:'/admindashboard/blogpanel',
            name:'Blog Panel',
        },

        {
            path:'/admindashboard/receivedmessages',
            name:'Received Messages',
        },

        {
            path:'/admindashboard/logout',
            name:'Log out'
        }
    ]});

    function toggleActive(key) {
        changeItem({ ...sidebarItem, activeTab: sidebarItem.sidebarTabs[key]})
    }

    function toggleActiveStyle(key){
    if (sidebarItem.sidebarTabs[key] === sidebarItem.activeTab) {
        return "active_link";
    } else {
        return "sidebar_link"
    }
    }


    return(
        <div className="dashboard">
             <div className="sidebar">
            <div className="header">
                    <h1>Admin Dashboard</h1>
                </div>
                <div>
                    {
                        sidebarItem.sidebarTabs.map((value, key) =>(
                             <Link to={value.path} key={key} className={toggleActiveStyle(key)}
                             onClick={()=>{toggleActive(key)}} >
                                <div className="text">
                                    {value.name}
                                </div>
                            </Link>
                        ))
                    }
                </div>
             </div>
             <main>{children}</main>
        </div>
        
    )
}

export default Sidebar