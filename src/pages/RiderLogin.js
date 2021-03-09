import React, { useState } from 'react'
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import LoginRegisterMenu from '../components/LoginRegisterMenu';
import RiderLoginComp from './RiderLoginComp';
import Dashboard from './Dashboard';
import RiderDashboard from './RiderDashboard';

function RiderLogin() {
    const [state, setstate] = useState("login")
    return (
        <div>
            {state === "dashboard" && (<RiderDashboard />)}
            {state === "login" && (<RiderLoginComp click={() => setstate("dashboard")} />)}
        </div>
    )
}

export default RiderLogin
