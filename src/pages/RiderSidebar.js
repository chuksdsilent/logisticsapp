import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function RiderSidebar({ sidebar, close }) {

    const [SidebarClass, setSidebarClass] = useState(sidebar)

    const closeHandler = (e) => {

        e.preventDefault();
        console.log("closed click");
        setSidebarClass("user-side-bar close-sidebar")
        console.log("slidebar is " + SidebarClass);

        setTimeout(() => {
            close()
        }, 1000)
    }
    return (
        <div className={SidebarClass} >
            <button className="close-btn" onClick={closeHandler}>X</button>

            <ul>
                <li><NavLink to='/rider/dashboard' className="user-nav"  ><DashboardIcon />  Dashboard</NavLink></li>
                <li><NavLink to='/rider/orders' className="user-nav"  ><HistoryIcon /> Orders</NavLink></li>
                <li><NavLink to='/rider/profile' className="user-nav"  ><AccountCircleIcon /> Profile</NavLink></li>
                <li><NavLink to='/rider/logout' className="user-nav"  ><PowerSettingsNewIcon /> Logout</NavLink></li>
            </ul>
        </div >
    )
}

export default RiderSidebar
