import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import UserHeader from '../components/UserHeader'
import UserSidebar from '../components/UserSidebar'
import '../css/NewOrder.css'
import CreateOrder from '../components/CreateOrder';
import Delivery from './Delivery';
import UserSummary from './UserSummary';
function NewOrder() {
    const [state, setState] = useState('create');
    const [summary, setSummary] = useState('')
    const delivery = () => {
        setState("delivery");
    }
    const summaries = () => {
        setState("summary");
    }
    return (
        <div className="new-order">
            <UserHeader />
            <div className="content">
                <UserSidebar />
                {state === "delivery" && (<Delivery summary={() => summaries()} />)}
                {state === "create" && (<CreateOrder delivery={() => delivery()} />)}
                {state === "summary" && (<UserSummary />)}
            </div>
        </div>
    )
}

export default NewOrder
