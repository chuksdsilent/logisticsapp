import React from 'react'
import RiderHeader from './RiderHeader'
import RiderSidebar from './RiderSidebar'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import '../css/Profile.css'

function RiderProfile({ slideOpens, closeSidebar, openHandler, riderSidebar }) {
    return (
        <div className="profile">
            <RiderHeader openMenu={openHandler} />
            <div className="content">
                {riderSidebar}
                <RiderSidebar close={closeSidebar} sidebar={"user-side-bar desktop"} />
                <div className="profile">
                    <div className="main-content d-flex justify-content-center">
                        <div className="app-card">
                            <div className="account-icon">
                                <AccountCircleIcon />
                            </div>
                            <div className="whole-container">

                                <div className="item-container">
                                    <AccountBoxIcon />
                                    <div className="sub-item">
                                        <h5>Name</h5>
                                        <div>Okoye John</div>
                                    </div>
                                </div>
                                <div className="item-container">
                                    <EmailIcon />
                                    <div className="sub-item">
                                        <h5>Email</h5>
                                        <div>Okoye John</div>
                                    </div>
                                </div>
                                <div className="item-container">
                                    <PhoneIcon />
                                    <div className="sub-item">
                                        <h5>Phone</h5>
                                        <div>Okoye John</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiderProfile
