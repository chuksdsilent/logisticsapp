import React from 'react'

function DashboardItems(props) {
    return (
        <div>
            <div className="app-card">
                <div className="card-icon">
                    {props.icon}
                </div>
                <div className="cont">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

export default DashboardItems
