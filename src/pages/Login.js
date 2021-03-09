import React, { useState } from 'react'
import LoginRegisterMenu from '../components/LoginRegisterMenu'
import '../css/Login.css'
import LoginComp from '../components/LoginComp'
import Dashboard from './Dashboard';

function Login() {

    const [state, setstate] = useState('login');
    const logins = () => {
        setstate("dashboard")
    }

    return (

        <div>
            {state === "dashboard" && <Dashboard />}
            {state === "login" && <LoginComp logins={() => logins()} />}
        </div>
    )
}

export default Login
