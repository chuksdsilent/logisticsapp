import React from 'react'
import '../css/CreateOrder.css'

import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PhoneIcon from '@material-ui/icons/Phone';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function CreateOrder(props) {
    return (
        <div className="create-order">
            <div className="main-content d-flex justify-content-center">
                <div className="app-card">
                    <h3>Create Order</h3>
                    <hr />

                    <div className="form-group my-3">
                        <div className="label">Pickup Address</div>
                        <div className="input-line my-2 ">
                            <LocalShippingIcon />
                            <input type="text" className=" form-control" />
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <div className="label">Contact Name</div>
                        <div className="input-line my-2 ">
                            <AccountCircleIcon />
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <div className="label">Phone</div>
                        <div className="input-line my-2 ">
                            <PhoneIcon />
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <div className="label">Weight(kg)</div>
                        <div className="input-line my-2 ">
                            <LocalMallIcon />
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <div className="label">Item</div>
                        <div className="input-line my-2">
                            <FeaturedPlayListIcon />
                            <input type="text" className=" form-control" />
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <div className="label">Cost of Item</div>
                        <div className="input-line my-2">
                            <AccountBalanceWalletIcon />
                            <input type="text" className=" form-control" />
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <div className="label">Pickup Date</div>
                        <div className="input-line my-2">
                            <DateRangeIcon />

                            <input type="text" className=" form-control" />
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <button onClick={props.delivery} className="btn primary-color border-radius btn-block">PROCEED >>></button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CreateOrder
