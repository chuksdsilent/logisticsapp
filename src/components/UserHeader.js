import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/UserHeaders.css'
import { IconButton } from '@material-ui/core';
function UserHeader({ toggleMenu }) {

    return (
        <div className="user-header">
            <div className="app-header">
                Company Name
            </div>
            {/* <div className="user">
                <AccountCircleIcon />
                User
                <ExpandMoreIcon />
            </div> */}
        </div>
    )
}

export default UserHeader
