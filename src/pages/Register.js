import React from 'react'
import LoginRegisterMenu from '../components/LoginRegisterMenu'
import '../css/Register.css'
import '../App.css'
import '../bootstrap/css/bootstrap.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
function Register() {
    return (
        <div className="register">
            <LoginRegisterMenu />
            <div className="d-flex justify-content-center">
                <div className="register-form">
                    <div className="app-card">
                        <h3>Register</h3>
                        <form action="" method="post">
                            <div className="form-group my-3">
                                <label htmlFor="">First Name</label>
                                <div className="input-line my-2 ">
                                    <AccountCircleIcon />
                                    <input type="text" className="form-control" name="" id="first_name" />
                                </div>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="">Last Name</label>
                                <div className="input-line my-2 ">
                                    <AccountCircleIcon />
                                    <input type="text" className="form-control" name="" id="last_name" />
                                </div>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="">Phone</label>
                                <div className="input-line my-2 ">
                                    <PhoneIcon />
                                    <input type="text" className="form-control" name="" id="phone" />
                                </div>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="">Email</label>
                                <div className="input-line my-2 ">
                                    <MailIcon />
                                    <input type="password" placeholder="Email" className="form-control" name="" id="email" />
                                </div>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="">Password</label>
                                <div className="input-line my-2 ">
                                    <LockIcon />
                                    <input type="password" placeholder="Password" className="form-control" name="" id="password" />
                                </div>
                            </div>
                            <div className="">
                                <button className="btn primary-color border-radius" style={{ "margin-bottom": "1rem", "margin-top": "1rem", "width": "100%" }}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register
