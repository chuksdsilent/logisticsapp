import React from 'react'
import '../css/UserSidebar.css'
import { NavLink } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import TimelineIcon from '@material-ui/icons/Timeline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

function UserSidebar() {

    return (
        <div className="user-side-bar">

            <ul>
                <li><NavLink to='/user/dashboard' className="user-nav" ><DashboardIcon />  Dashboard</NavLink></li>
                <li><NavLink to='/user/create-order' className="user-nav" ><AddShoppingCartIcon />  Create Order</NavLink></li>
                <li><NavLink to='/user/track-order' className="user-nav" ><ArtTrackIcon /> Track Order</NavLink></li>
                <li><NavLink to='/user/order-history' className="user-nav" ><TimelineIcon /> Order History</NavLink></li>
                <li><NavLink to='/user/profile' className="user-nav" ><PersonIcon /> Profile</NavLink></li>
                <li><NavLink to='/user/logout' className="user-nav" ><PowerSettingsNewIcon /> Logout</NavLink></li>
            </ul>


        </div>
    )
}

export default UserSidebar
