import React from 'react'

import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import LoginRegisterMenu from '../components/LoginRegisterMenu';
import rider from '../images/rider.png'

function RiderLoginComp({ click }) {
    return (
        <div>
            <div className="login">
                <LoginRegisterMenu />
                <div className="content">
                    <div className="illustrator">
                        <img src={rider} alt="" />

                    </div>
                    <div className="login-form">
                        <div className="app-card">
                            <h3>Login</h3>
                            <div className="form-group my-3">
                                <label htmlFor="">Email</label>
                                <div className="input-line my-2 ">
                                    <MailIcon />
                                    <input type="text" className="form-control" name="" id="first_name" />
                                </div>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="">Password</label>
                                <div className="input-line my-2 ">
                                    <LockIcon />
                                    <input type="password" placeholder="Password" className="form-control" name="" id="password" />
                                </div>
                            </div>
                            <div className="form-group-contain">
                                <input type="checkbox" name="" id="" /> Remember me
                        </div>
                            <div className="">
                                <button className="btn primary-color border-radius" onClick={click} style={{ "margin-bottom": "1rem", "margin-top": "1rem", "width": "100%" }}>Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RiderLoginComp
