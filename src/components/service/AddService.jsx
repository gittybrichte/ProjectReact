import { observer } from 'mobx-react';
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import { addService } from "../../data/Server";

const AddService = (observer(({ func }) => {
  const [isOpen, setIsOpen] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    func();
    addService(formData);
    setIsOpen(false)
  }

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogContent >
          <form onSubmit={handleSubmit} className="form dc" >
            <div className="form-item">
              <TextField fullWidth label="סוג השירות:" name="name" value={formData.name} onChange={handleChange} className="textField" />
            </div>
            <div className="form-item">
              <TextField fullWidth label="מחיר:" name="price" value={formData.price} onChange={handleChange} className="textField" />
            </div>
            <div className="form-item">
              <TextField fullWidth label="תיאור:" name="description" value={formData.description} onChange={handleChange} className="textField" />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button className="btnDialog" onClick={() => { setIsOpen(false); func(); }}>חזרה</Button>
          <Button className="btnDialog" type="submit" onClick={handleSubmit}>שמירה</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}))

export default AddService





