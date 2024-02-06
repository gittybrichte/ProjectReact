import { makeObservable, observable, action } from "mobx";
class Services {
  isAdmin = false;
  services
    = [
      {

        price: "200",
        name: "ניו בורן",
        description: "תמונות יפהפיות בעריכה אמנותית "

      },
      {
        price: "1600",
        name: "חלאקה",
        description: "20 תמונות מעוצבות באלבום"
      },
      {
        price: "1200",
        name: "משפחה",
        description: "10 תמונות בעריכה אמנותית בפוטושופ"
      },
      {
        price: "800",
        name: "סמאשקייק",
        description: "20 תמונות מעוצבות בקולאז'"
      },

    ]
  meetings = [];
  constructor() {
    makeObservable(this, {
      services: observable,
      addService: action,
      setServices: action,
      meetings: observable,
      setMeetings: action,
      addMeeting: action,
      isAdmin: observable,
      setIsAdmin: action,
    })
  }
  setServices = (services) => {
    this.services = [...services];
  }
  addService = (service) => {
    this.services = [...this.services, service];
  }
  setMeetings = (meetings) => {
    this.meetings = [...meetings];
  }

  addMeeting = (meeting) => {
    this.meetings = [...this.meetings, meeting];
  }
  setIsAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
export default new Services();












