import React from 'react'
import OrderItems from '../components/OrderItems'
import UserHeader from '../components/UserHeader'
import RiderHeader from './RiderHeader'
import RiderSidebar from './RiderSidebar'
import HistoryIcon from '@material-ui/icons/History';
import '../css/Dashboard.css'
import DashboardItems from '../components/DashboardItems'
import { NavLink } from 'react-router-dom'

function RiderDashboard({ slideOpens, closeSidebar, openHandler, riderSidebar }) {
    return (
        <div className="dashboard">
            <RiderHeader openMenu={openHandler} />
            <div className="content">
                {riderSidebar}
                <RiderSidebar close={closeSidebar} sidebar={"user-side-bar desktop"} />
                <div className="main-content">
                    <div className="dashboard-link">
                        <NavLink to='/'>
                            <DashboardItems icon={<HistoryIcon className="app-icons" />} title="Orders" />
                        </NavLink>
                    </div>
                    <div style={{ 'marginTop': "3rem" }}>
                        <OrderItems />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default RiderDashboard
