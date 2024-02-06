import { observer } from 'mobx-react';
import { useState, useEffect } from 'react';
import { Fab, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import AddService from "./AddService";
import Service from "./Service";
import Services from '../../data/Services';
import { getServices } from '../../data/Server';
import { addService2 } from '../../data/Server';
import AddMeeting from '../meeting/AddMeeting';

const ServiceList = (observer(() => {

    const [isAddMeet, setIsAddMeet] = useState(false);
    const [isAdd, setIsAdd] = useState(false);

    useEffect(() => {
            getServices();
    }, []);

    const handleAddService = () => {
        setIsAdd(!isAdd);
    }

    const handleAddMeeting = () => {
        setIsAddMeet(!isAddMeet);
    }

    return (
        <>
            {isAdd ? <AddService func={handleAddService}></AddService> : Services.isAdmin ?
                <Fab color="secondary" aria-label="add" onClick={handleAddService}><AddIcon /></Fab> :
                <Button id="send" variant="contained" endIcon={<SendIcon />} onClick={() => setIsAddMeet(!isAddMeet)}>לתיאום צילומים</Button>
            }
            {isAddMeet && <AddMeeting func={handleAddMeeting} ></AddMeeting>}

            {Services.services.length > 0 ? <div id='services'>
                {Services.services.map((service, i) =>
                    <Service key={i} name={service.name} price={service.price} discription={service.description}></Service>
                )}
            </div> : <div>אין שירותי עסק</div>}
        </>
    )
}))


export default ServiceList





