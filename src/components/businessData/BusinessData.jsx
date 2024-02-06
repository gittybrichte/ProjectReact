import { useState } from "react"
import { observer } from "mobx-react"
import AppStore from "../../data/AppStore"
import EditBusinessData from "./EditBusinessData"
import ShowBusinessData from "./ShowBusinessData"
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
const BusinessData = (observer(() => {
    const [editForm, setEditForm] = useState(false)

    const handleClick = () => setEditForm(!editForm)
    return (
        <>
            {AppStore.isLogin && editForm ? <EditBusinessData func={handleClick} /> :
                <ShowBusinessData />
            }

            {AppStore.isLogin && !editForm && <Fab color="secondary" onClick={handleClick} aria-label="edit">
                <EditIcon />
            </Fab>}

        </>
    )
}))

export default BusinessData

