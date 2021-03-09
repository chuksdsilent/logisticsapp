import React, { useState } from 'react'
import OrderItems from '../components/OrderItems'
import RiderHeader from './RiderHeader'
import RiderSidebar from './RiderSidebar'
import '../css/RiderOrder.css'
import Tabs from './Tabs'


function RiderOrder({ slideOpens, closeSidebar, openHandler, riderSidebar }) {


    return (
        <div>
            <div className="rider-order">
                <RiderHeader openMenu={openHandler} />
                <div className="content">
                    {riderSidebar}
                    <RiderSidebar close={closeSidebar} sidebar={"user-side-bar desktop"} />
                    <div className="main-container">
                        <h1 style={{ "marginBottom": "2rem" }}>History</h1>
                        <Tabs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiderOrder
