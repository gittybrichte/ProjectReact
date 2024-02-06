import { observable, makeObservable, action } from 'mobx';

class DataStore {

    busines = {
        name: "גיטי פוטוגרפי",
        address: "רבי מאיר 6, נתניה",
        phone: "0548489247",
        owner: "גיטי בריכטא",
        logo: "../src/assets/logo/logo2.png",
        description: "צילום משפחה, ילדים, תדמית והפקות בסטודיו ובחוץ",
    };

    constructor() {
        makeObservable(this, {
            busines: observable,
            setBusines: action,
        })
    }
    setBusines(bus) {
        if (Object.keys(bus).length > 0) {
            this.busines = bus;
        }
    }
}

export default new DataStore();



