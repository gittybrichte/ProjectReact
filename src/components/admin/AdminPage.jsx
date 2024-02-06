import { useEffect } from "react"
import { observer } from "mobx-react"
import { Outlet, Link } from "react-router-dom"
import Services from "../../data/Services"
import BusinessData from "../businessData/BusinessData"

const BusinessAdmin = (observer(() => {
  useEffect(() => {
    Services.isAdmin = true;
  }, []);

  return (
    <>
      <div style={{ height: 180 }}></div>
      <BusinessData />
      <br />
      <div className="button-container">
        <button className="btnLink"><Link to="./services" className="btnLink">שירותי עסק</Link></button>
        <button className="btnLink"><Link to="./meeting" className="btnLink">פגישות</Link></button>
      </div>
      <Outlet />
    </>
  )

}
))


export default BusinessAdmin
