import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
      marginLeft: theme.spacing(2),
      zIndex: "50000",
      position:'absolute',
      top:'0',
      left: "0",
      right: '0',
      bottom: '0',
      justifyContent: 'center',
      alignItems: 'center'
      
    },

}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress  color="secondary"/>
     
    </div>
  );
}