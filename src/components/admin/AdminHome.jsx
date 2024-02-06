import { observer } from "mobx-react"
import AppStore from "../../data/AppStore"
import Login from "./Login"
import AdminPage from "./AdminPage"

const AdminHome = (observer(() => {

    return (
        <>

            {!AppStore.isLogin ?
                <Login /> :
                <AdminPage />
            }
            
        </>
    )
}))

export default AdminHome
