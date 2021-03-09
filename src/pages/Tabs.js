import { useState } from "react";
import { Link } from "react-router-dom";
import OrderItems from "../components/OrderItems";
import "../css/Tabs.css";
function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">

                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Pending
        </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Started
        </button>

                <button
                    className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(6)}
                >
                    Completed
        </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "contents  active-content" : "contents"}
                >
                    <OrderItems />
                </div>
                <div
                    className={toggleState === 3 ? "contents  active-content" : "contents"}
                >
                    <OrderItems />
                    <OrderItems />
                </div>
            </div>
        </div >
    );
}

export default Tabs;