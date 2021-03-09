import React, { useState } from 'react'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import RiderSubMenu from '../components/RiderSubMenu';
import { NavLink } from 'react-router-dom';

function RiderHeader(props) {

    return (
        <div className="rider-header">
            <div className="user-header">
                <div className="app-header">
                    Company Name
                </div>
                {/* <div className="user">
                    <div className="right-menu">

                        <AccountCircleIcon />
                    User
                        <IconButton >
                            <ExpandMoreIcon />
                        </IconButton>
                    </div>
                    <RiderSubMenu>
                        <NavLink to="/">
                            Profile
                        </NavLink>
                    </RiderSubMenu>

                </div> */}
                <IconButton onClick={props.openMenu}>
                    <MenuIcon />
                </IconButton>
            </div>

        </div >
    )
}

export default RiderHeader
