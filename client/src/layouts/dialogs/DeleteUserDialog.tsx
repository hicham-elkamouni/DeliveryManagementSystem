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
import { useNavigate } from 'react-router-dom';
import useFetch from '../../Services/Utils/useFetch';
interface props {
  setOpen: (val: boolean) => void , 
  open: boolean , 
  managerId: string,
  // setResponse: ((val: string) => void),
  refetch : any
}


const AlertDialog: React.FC<props> =  ({setOpen , open , managerId , refetch }) => {

  let navigate = useNavigate();
  
  // ! GET TOKEN FROM STORE
  let token = useSelector((state : RootState)=> state.user.token);

  const deleteManager = (id : string) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.delete(`http://localhost:3000/api/admin/removeManager/${id}`, config)
    .then( (res) =>{
        console.log(res.data)
    })
    .catch((err) =>{
        setError(err)
    })
    setOpen(!open)
    refetch((previous:any)=>previous.filter((user:any)=> user._id !== id))
  }
    
  return (
    <div>
      <Dialog
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
          <Button onClick={() => deleteManager(managerId)} autoFocus> Agree </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertDialog

function setError(err: any) {
    throw new Error('Function not implemented.');
}
