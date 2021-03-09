import React from 'react'
import UserHeader from '../components/UserHeader'
import UserSidebar from '../components/UserSidebar'
import '../css/UserSummary.css'
import '../css/General.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { NavLink } from 'react-router-dom';


function UserSummary() {
    return (
        <div class="user-summary user-card">
            <UserHeader />
            <UserSidebar />
            <div className="main-content">
                <div className="user-summary-container user-card">
                    <div className="user-rider-info">

                        <div className="app-card">
                            <div className="user-info-side-bar">
                                <div>From</div>
                                <CheckCircleIcon />

                            </div>
                            <div className="user-info-content">
                                <h5>Ada</h5>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ab id nesciunt et ut sint provident quo sunt nostrum reiciendis.
                            </div>
                        </div>
                        <div className="app-card">
                            <div className="user-info-side-bar">
                                <div>To</div>

                                <CheckCircleIcon />

                            </div> <div className="user-info-content">
                                <h5>Ada</h5>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ab id nesciunt et ut sint provident quo sunt nostrum reiciendis.
                            </div>
                        </div>
                    </div>
                    <div className="order-detail">
                        <h4>Here are details of your order</h4>
                        <div className="app-card">
                            <table className="table table-bordered">
                                <tr>
                                    <th>Pickup Phone</th>
                                    <th>058741222</th>
                                </tr>
                                <tr>
                                    <th>Delivery Phone</th>
                                    <th>058741222</th>
                                </tr>
                                <tr>
                                    <th>Item</th>
                                    <th>Lorem, ipsum.</th>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <th>523kg</th>
                                </tr>
                                <tr>
                                    <th>Item Value</th>
                                    <th>54745</th>
                                </tr>
                                <tr>
                                    <th>Pickup Contact</th>
                                    <th>058741222</th>
                                </tr>
                                <tr>
                                    <th>Delivery Contact</th>
                                    <th>058741222</th>
                                </tr>
                            </table>
                            <div className="user-pay">
                                <NavLink to='/'>
                                    Pay Now
                                </NavLink>
                                <NavLink to='/'>
                                    Pay on Delivery
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSummary
