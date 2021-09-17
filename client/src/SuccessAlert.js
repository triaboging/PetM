import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export  function CustomizedSnackbars(props) {
  
  const classes = useStyles();
  // const [openAlert, setOpenAlert] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.closeAlertFunction()
  };
  
    // if (props.message === 'Пользователь создан'){
    //   console.log('равно')
    // }else{console.log('хрен там')}
    // let alertType;
    // switch (props.message) {
    //   case 'Пользователь создан': alertType ="success"; break;
    //   case 'Taкой пользователь уже есть...' : alertType ="warning";break;
    //   default: alertType ="error"
    // }
    
    if (props.message && props.message.message === 'Пользователь создан'){
      console.log('место 100', props.message)
    }else{console.log('хрен там')}
    let alertType;
    if(!props.message){
      return null
    }
    switch (props.message.status) {
      case 'good': alertType ="success"; break;
      case 'bad' : alertType ="error";break;
      default: alertType ="error"
    }
  return (
    <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}

      <Snackbar open={props.openAlert} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} 
        
        severity={alertType}>
          {props.message.message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </div>
  );
}