import { observer } from "mobx-react"
import ServiceList from "../service/ServiceList"
import ShowBusinessData from "../businessData/ShowBusinessData"
import Services from "../../data/Services"
import { useEffect } from "react"
import './User.css'
const User = (observer(() => {
    useEffect(() => {
    Services.isAdmin=false;
    console.log(Services.isAdmin);
          }, []);
    return (
        <>
            <main>
                <div id="pictures"></div>
            </main>
            <ShowBusinessData/>
            <ServiceList />
        </>
    )
}))

export default User



