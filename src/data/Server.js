import axios from 'axios';
import AppStore from './AppStore';
import Services from "./Services";
import DataStore from "./DataStore";

export async function CheckLogin(name, password) {
    try {
        const isValid = await axios.post('http://localhost:8787/login', { name:  name , password:  password  });
        if (isValid.status === 200) {
            AppStore.setIsLogin(true);
        }
    }
    catch (e) {
        if (e.response) {
            alert('userName or password not correct')
        }
        else {
            console.log(e)
            alert('server failed')
        }
    }
}

export async function getServices() {
    const services = await axios.get('http://localhost:8787/services');
    Services.setServices(services.data);
}

export async function addService(service) {
    try {
        const res = await axios.post('http://localhost:8787/service', service);
        alert("השירות נוסף בהצלחה");
        Services.addService(service);
        return 'success';
    }

    catch (e) {
        alert("השירות כבר קיים במערכת");
        return 'failed';
    }
}
export async function addService2(service) {
    try {
        const res = await axios.post('http://localhost:8787/service', service);
        Services.addService(service);
        return 'success';
    }

    catch (e) {
        return 'failed';
    }
}

export async function getMeetings() {
    const meetings = await axios.get('http://localhost:8787/appointments');
    const sortedData = [...meetings.data].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

    Services.setMeetings(sortedData);
}

export async function addMeeting(meeting) {
    try {
        const res = await axios.post('http://localhost:8787/appointment', meeting);
        if (res.status === 200) {
            alert("הפגישה נוספה בהצלחה");
            Services.addMeeting(meeting);
            return 'success';
        }
    }
    catch (e) {
        alert("תאריך הפגישה תפוס נסו שנית");
        return 'failed';
    }
}
export async function postBusines(busines) {
    const res = await axios.post('http://localhost:8787/businessData', busines);
    if (res.status === 200) {
        DataStore.setBusines(res.data)

        return 'success';
    }
    else {
        return 'failed';
    }
}
export async function putBusines(busines) {
    const res = await axios.put('http://localhost:8787/businessData', busines);
    if (res.status === 200) {
        DataStore.setBusines(res.data)
        return 'success';
    }
    else {
        return 'failed';
    }
}
export async function getBusines() {
    const busines = await axios.get('http://localhost:8787/businessData');
    DataStore.setBusines(busines.data)
}

