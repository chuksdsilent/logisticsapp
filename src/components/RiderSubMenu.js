import React from 'react'
import '../css/RiderSubMenu.css'
function RiderSubMenu(props) {
    return (
        <div className="rider-sub-menu">
            {props.children}
        </div>
    )
}

export default RiderSubMenu
