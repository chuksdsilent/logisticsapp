import React from 'react'
import UserHeader from '../components/UserHeader'
import UserSidebar from '../components/UserSidebar'
import '../css/Dashboard.css'
import RiderSidebar from './RiderSidebar'
import HistoryIcon from '@material-ui/icons/History';
import OrderItems from '../components/OrderItems'
import DashboardItems from '../components/DashboardItems'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import { NavLink } from 'react-router-dom'
function Dashboard({ slideOpens, closeSidebar, openHandler, riderSidebar }) {
    return (
        <div className="dashboard">
            <UserHeader openMenu={openHandler} />
            <div className="content">
                {riderSidebar}
                <UserSidebar close={closeSidebar} sidebar={"user-side-bar desktop"} />
                <div className="main-content">
                    <div className="dashboard-item-container">
                        <NavLink to='/user/create-order'>
                            <DashboardItems icon={<ShoppingCartIcon className="app-icons" />} title="Create Order" />
                        </NavLink>
                        <NavLink to='/user/track-order'>
                            <DashboardItems icon={<LocalDrinkIcon className="app-icons" />} title="Track Parcel" />
                        </NavLink>
                        <NavLink to='/user/order-history'>
                            <DashboardItems icon={<HistoryIcon className="app-icons" />} title="Create Order" />
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

export default Dashboard
