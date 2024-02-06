import { observer } from "mobx-react";
import { useEffect } from "react";
import DataStore from "../../data/DataStore";
import { getBusines } from "../../data/Server";

import './business.css';
const ShowBusinessData = (observer(() => {
    useEffect(() => {
        getBusines();
    }, []);
    return (
        <>
            <header>
                <div id="header"></div>
                <div id="nav">
                    <div className="logo"> <img src={DataStore.busines.logo} id="imgLogo" ></img></div>
                    <nav>
                        <h3 className="business-name">{DataStore.busines.name}</h3>
                        <h3 className="address">{DataStore.busines.address}</h3>
                    </nav>
                </div>
            </header>

        </>
    )
}))
export default ShowBusinessData

