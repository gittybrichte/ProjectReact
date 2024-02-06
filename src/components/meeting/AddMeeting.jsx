import { useState } from "react"
import { observer } from 'mobx-react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Autocomplete, Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { addMeeting } from "../../data/Server";
import Services from "../../data/Services";

const AddMeeting = observer(({ func }) => {
  const [formData, setFormData] = useState({ type: '', name: '', phone: '', email: '', meetingDateTime: null });
  const [isOpen, setIsOpen] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    func();
    if (formData.type !== "" && formData.name !== "" && formData.phone !== "" && formData.email !== "") { addMeeting(formData); }
    else { alert("האם מלאת את כל השדות חובה?") }
    setIsOpen(false);
    setFormData({
      type: '', name: '', phone: '', email: '',
      meetingDateTime: null,
    });
  };
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleDateTimeChange = (dateTime) => {
    const formattedDateTime = dateTime.format('YYYY-MM-DDTHH:mm:ss');
    setFormData((prevData) => ({
      ...prevData,
      dateTime: formattedDateTime,
    }));
    handleInputChange({ target: { name: 'dateTime', value: formattedDateTime } });
  };
  const options = [Services.services.length];
  Services.services.map((item, index) => options[index] = item.name)
  return (
    <>
      <div>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogTitle className="dt">...נעים להכיר</DialogTitle>
          <DialogContent >
            <form onSubmit={handleSubmit} className="form dc" >
              <div className="form-item">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker className="d" label="יש להזין תאריך ושעה*"
                    renderInput={(props) => (
                      <TextField {...props} variant="outlined" name="dateTime" />
                    )}
                    value={formData.dateTime} onChange={handleDateTimeChange} disablePast required />
                </LocalizationProvider>
              </div>
              <div className="form-item">
                <Autocomplete
                  disablePortal
                  options={options}
                  value={formData.type}
                  onChange={(_, val) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      type: val,
                    }))
                  }}
                  renderInput={(params) => <TextField {...params} label="סוג הפגישה*" />}
                /></div>
              <div className="form-item">
                <TextField fullWidth label="שם מלא*" name="name" value={formData.name} onChange={handleInputChange} placeholder="clientName" className="textField" />
              </div>
              <div className="form-item">
                <TextField label="כתובת אימייל*" fullWidth name="email" value={formData.email} onChange={handleInputChange} placeholder="clientEmail" className="textField" />
              </div>
              <div className="form-item">
                <TextField fullWidth label="מספר טלפון*" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="clientPhone" className="textField" />
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button className="btnDialog" onClick={() => { setIsOpen(false); func(); }}>חזרה</Button>
            <Button className="btnDialog" type="submit" onClick={handleSubmit}>...כבר רואים שיש בינינו קליק</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
})
export default AddMeeting

