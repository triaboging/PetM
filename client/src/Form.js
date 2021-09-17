import React from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import LoginForm from './LoginForm';

import { makeStyles } from '@material-ui/core';
import RegistrForm from './RegistrForm';
import SelectForm from './SelectForm';



const useStyles = makeStyles((theme)=> ({
root: {
    borderRadius: "10px"
},
// formClass: {
//  width: "500px"
// },
newStyle: {
  width: "400px"
}
}))


 export default function Form(props) {
    const classes = useStyles()
    

    // const [openDialog, setOpenDialog] = React.useState(false);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
    return(
       
        <Dialog  open={props.open } 
        // fullWidth
        onClose={props.handleClose} aria-labelledby="form-dialog-title" classes={{paperWidthSm: classes.newStyle}}>
        <DialogTitle style={{textAlign: "center"}} id="form-dialog-title" className={classes.widthpoint}>
        {props.dialogOpen==='login'&&  'Авторизуйтесь'} 
        {props.dialogOpen==='registr'&&  'Зарегестрируйтесь'}
        {props.dialogOpen==='restore'&&  'Забыли пароль?'}
         </DialogTitle>
            {/* <LoginForm /> */}
            {/* <RegistrForm/> */}
            
            <SelectForm dialogOpen={props.dialogOpen}/>
        {/* <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
      
    )
}
