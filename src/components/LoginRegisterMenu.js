import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/LoginRegisterMenu.css'

function LoginRegisterMenu() {
    return (
        <div className="loginregistermenu">
            <div className="reg-header">
                <div className="company-name">Company Name</div>
                <div className="login-menu">
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </div>
                <div className="login-menu">
                    <NavLink to="/">
                        Register
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default LoginRegisterMenu
