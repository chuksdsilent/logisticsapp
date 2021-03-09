import React from 'react'
import UserSidebar from '../components/UserSidebar'
import UserHeader from '../components/UserHeader'
import '../css/TrackOrder.css'
import SearchIcon from '@material-ui/icons/Search';
function TrackOrder() {
    return (
        <div className="track-order">
            <div className="content">
                <UserHeader />
                <UserSidebar />
                <div className="main-content">

                    <div className="track-container">
                        <h3>Track Order</h3>
                        <hr />
                        <form action="" method="post">
                            <div className="form-group my-3">
                                <div className="input-line my-2" >
                                    <SearchIcon style={{ "margin-top": "8px" }} />
                                    <input type="text" className=" form-control" />
                                    <button className="btn primary-color border-radius">Search</button>
                                </div>

                                <table className="table" style={{ "margin-top": "2rem" }}>
                                    <tbody>
                                        <tr>
                                            <th>Order No</th>
                                            <td>sdf58ed5</td>
                                        </tr>
                                        <tr>
                                            <th>Parcel</th>
                                            <td>Iphone</td>
                                        </tr>
                                        <tr>
                                            <th>Origin</th>
                                            <td>Yaba</td>
                                        </tr>
                                        <tr>
                                            <th>Current Location</th>
                                            <td>Yaba</td>
                                        </tr>
                                        <tr>
                                            <th>Destination</th>
                                            <td>Yaba</td>
                                        </tr>
                                        <tr>
                                            <th>Driver's Name</th>
                                            <td>Yaba</td>
                                        </tr>
                                        <tr>
                                            <th>Driver's Contact</th>
                                            <td>Yaba</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TrackOrder
