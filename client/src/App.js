import logo from './logo.svg';
import React, { createContext } from 'react'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavBar } from './NavBar';
import  CssBaseline  from '@material-ui/core/CssBaseline';
import { Footer } from './Footer';
import { grey } from '@material-ui/core/colors';
import { Button, Container, Grid, Paper,Typography } from '@material-ui/core';
import video from './video/Video.mp4'
import { CenterFocusStrong, ViewColumn } from '@material-ui/icons';
import zIndex from '@material-ui/core/styles/zIndex';
import AOS from 'aos';
import "aos/dist/aos.css";
// import Login from './Login.js'
import Form from './Form';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import Loader from './components/Loading/Loading';
import { useSelector, Provider } from 'react-redux';
AOS.init({ once: true });
export const Context = createContext(null)

const useStyles = makeStyles((theme)=>({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.grey[50]
  },
  mainFeaturesPostContent:{
    position: "relative",
    // marginTop: theme.spacing(9),
    padding: theme.spacing(3),
    zIndex: "5"
 },
 mainFeaturesPost: {
  position: "relative",
  color: theme.palette.common.white,
 /*  marginBottom: theme.spacing(4), */
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
},

fullScreenVideo:{
  position: 'fixed',
  top: 0,
  left: 0,
  width: "100%" ,
  height: "100%",
  objectFit: "cover",
  

},
 video: {
  position:'relative',
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
 
 
  
  
},
videoText:{
  position: 'relative',
  width: "100%",
  zIndex: "2",
  display: "flex",
  flex: "1  1 auto",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  // backgroundColor: "rgba(0,0,0,0.5)",
  // height:"100%",
  marginTop: theme.spacing(5),
  padding: 0
}
}))
function App() {
  const classes = useStyles()
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const loader = useSelector(state => state.userReducer.loading)
  const routes = useRoutes()
  const [dialogOpen, setDialogOpen] = React.useState(null);
  const [openState, setOpenState ] = React.useState(false);
  function openLoginFunction(){
   setDialogOpen('login')
   setOpenState(true)
   
  }
  function handleClose() {
    setOpenState(false)
    setDialogOpen(null)
  }
  function openRegisterDialog(){
    setDialogOpen('registr')
    setOpenState(true)
  }
  function openLoginDialog(){
    setDialogOpen('login')
    setOpenState(true)
  }
  return (
    <BrowserRouter >
    <Context.Provider value = {openLoginFunction}>
    <div className = {classes.root}>
      <CssBaseline />
      <NavBar 
      openRegisterDialog={openRegisterDialog}
      openLoginDialog={openLoginDialog}
      openLoginFunction={openLoginFunction}/>
      {loader && <Loader/>}
      
      <Form  handleClose={handleClose}
      open={openState}
      dialogOpen={dialogOpen}/>
      {/* <Login/> */}
      <main className={classes.main}>
        {routes}
      
      </main>
      <Footer/>
    </div>
    </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
