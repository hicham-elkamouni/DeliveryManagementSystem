import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
interface props {
  setOpen: (val: boolean) => void , 
  open: boolean , 
  managerId: string
}


const AlertDialog: React.FC<props> =  ({setOpen , open , managerId}) => {

    // ! GET TOKEN FROM STORE
    let token = useSelector((state : RootState)=> state.user.token);
    
  return (
    <div>
      <Dialog
        // onClick={() => setOpen(!open)}
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want delete it {managerId} !?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)}>Disagree</Button>
          <Button onClick={async() => {
            // DELETE MANAGER ROUTE
            

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            axios.delete(`http://localhost:3000/api/admin/removeManager/${managerId}`, config)
            .then( (res) =>{
                console.log(res.data)
            })
            .catch((err) =>{
                setError(err)
            })
            setOpen(!open)
            }} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertDialog

function setError(err: any) {
    throw new Error('Function not implemented.');
}
