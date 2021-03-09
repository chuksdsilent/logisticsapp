import React from 'react'
import UserHeader from '../components/UserHeader'
import UserSidebar from '../components/UserSidebar'
import '../css/OrderHistory.css'
import '../css/General.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import OrderItems from '../components/OrderItems'

function OrderHistory() {
    return (
        <div className="order-history">
            <UserHeader />
            <div className="content">
                <UserSidebar />
                <div className="user-card">

                    <div className="main-content">
                        <div className="user-card">
                            <div className="user-rider-info">
                                <h3 style={{ "margin": "2rem 0rem" }}>Your Order History</h3>
                                <OrderItems />
                                <OrderItems />
                                <OrderItems />
                                <OrderItems />
                                <OrderItems />
                                <OrderItems />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory
