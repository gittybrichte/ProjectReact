import { useState } from "react"
import { observer } from "mobx-react";
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import DataStore from "../../data/DataStore";
import { putBusines } from "../../data/Server";
import './business.css'

const EditBusinessData = (observer(({ func }) => {
  const [formData, setFormData] = useState(DataStore.busines);
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    func();
    DataStore.setBusines(formData);
    putBusines(formData);
    setIsOpen(false)
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogContent >
          <form onSubmit={handleSubmit} className="form dc" >
            <div className="form-item">
              <TextField fullWidth label="שם העסק:" name="name" value={formData.name} onChange={handleChange} className="textField" />
            </div>
            <div className="form-item">
              <TextField fullWidth label="כתובת:" name="address" value={formData.address} onChange={handleChange} className="textField" />
            </div>
            <div className="form-item">
              <TextField fullWidth label="טלפון:" name="phone" value={formData.phone} onChange={handleChange} className="textField" />
            </div>
            <div className="form-item">
              <TextField fullWidth label="בעלים:" name="owner" value={formData.owner} onChange={handleChange} className="textField" />
            </div>
            <div className="form-item">
              <TextField fullWidth label="תיאור:" name="description" value={formData.description} onChange={handleChange} className="textField" />
            </div>
            <div className="form-item">
              <TextField fullWidth label="לוגו:" name="logo" value={formData.logo} onChange={handleChange} className="textField" />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button className="btnDialog" onClick={() => { setIsOpen(false); func(); }}>חזרה</Button>
          <Button className="btnDialog" type="submit" onClick={handleSubmit}>SAVE</Button>
        </DialogActions>
      </Dialog>

    </>
  )
}))


export default EditBusinessData