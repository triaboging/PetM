import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import BookIcon from "@material-ui/icons/Book";
import IconButton from '@material-ui/core/IconButton';
import { AppBar, Button, Link, Toolbar, Typography } from '@material-ui/core';
// import { red } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import { flexbox } from '@material-ui/system';
import { CenterFocusStrong } from '@material-ui/icons';
import {NavDrawer} from './NavDrawer'
import clsx from 'clsx';
import { element } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from './reducers/userReducer'

const useStyles = makeStyles((theme) => ({
    logo: {
        color: theme.palette.common.white,
        // alignItems: "start",
        marginLeft: theme.spacing(1),
        display: "inline-flex",


    },
    noDecoration: {
        textDecoration: "none !important"
    },

    menuButtonText: {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        color: theme.palette.common.white,
        
        

    },
    active:{
        color: 'red'
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    text: {
        color: theme.palette.common.white
      }
}));
export const NavBar = (props) => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const classes = useStyles()
    const [selectedButton, setSelectedButton] = React.useState()
    const[active, setActive] = React.useState(false)
    console.log(active)
    console.log('from func:', selectedButton)
    // if(selectedButton === element.name){
    //     setActive(true)
    // }
    const menuStyle = clsx({
        [classes.menuButtonText] : true, //always applies
        [classes.active] : active //only when open === true
    })
    // const [openLoginDialog, setOpenLoginDialog ] = React.useState(false);
    const [windowStatys, setWindowStatus] = React.useState(false)
    function mobileDrawerOpen (){
        setWindowStatus(true)
    }
    function mobileDrawerClose (){
        setWindowStatus(false)
    }
    function mobileDrawerToggle (){
        setWindowStatus(!windowStatys)
    }
    // function openLoginFunction(){
    //     setOpenLoginDialog(false)
    // }
    let menuItems
    if(isAuth){
          menuItems = [
            {
                link: "/home",
                name: "Home",
                icon: <HomeIcon  className = {classes.text} /* className="text-white" */ />
            },
            {
                link: "/confirmation",
                name: "Bloggg",
                icon: <BookIcon className={classes.text} />
            },
            {
                name: "Register",
                onClick: props.openRegisterDialog,
                icon: <HowToRegIcon className={classes.text} />
            },
            {
                name: "Login",
                onClick: props.openLoginFunction,
                icon: <LockOpenIcon className={classes.text} />
            },
            {
                name: "Выход",
                onClick: () => dispatch(logout()),
                icon: <ToggleOffIcon className={classes.text} />
            }
        ];
    }else{
          menuItems = [
            {
                link: "/home",
                name: "Home",
                icon: <HomeIcon  className = {classes.text} /* className="text-white" */ />
            },
            {
                link: "/confirmation",
                name: "Bloggg",
                icon: <BookIcon className={classes.text} />
            },
            {
                name: "Register",
                onClick: props.openRegisterDialog,
                icon: <HowToRegIcon className={classes.text} />
            },
            {
                name: "Login",
                onClick: props.openLoginFunction,
                icon: <LockOpenIcon className={classes.text} />
            }
        ];
    }
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar className = {classes.toolbar}>
                    <div>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={mobileDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    
                        <Typography
                            className={classes.logo}
                            variant="h5"
                            display="inline"
                            color="primary"
                        >logo
                        </Typography>
                    </div>
                    <div>
                        <Hidden smDown>
                            {menuItems.map(element => {
                                if(element.link){
                                return (
                                    <NavLink
                                        // {activeClassName ? classes.active : classes.}
                                        // activeClassName={classes.active}
                                        key={element.name}
                                        to={element.link}
                                        className={classes.noDecoration}
                                    //   onClick={handleMobileDrawerClose}
                                    >
                                        <Button
                                            color="secondary"
                                            size="large"
                                            classes={{ text: classes.menuButtonText }}
                                        >
                                            {element.name}
                                            
                                        </Button>
                                    </NavLink>
                                );
                                }
                                return (
                                    <Button
                                      color="secondary"
                                      size="large"
                                     onClick={(e)=>{
                                        element.onClick(e);
                                        
                                        setSelectedButton(element.name);
                                        
                                        
                                        
                                        // setActive(selectedButton === element.name )
                                       
                                    }}
                                   
                                       
                                    //   onClick={()=>{setSelectedButton(element.name)}}
                                    //   onClick={element.onClick}
                                    //   {setActive (selectedButton === element.name )}
                                      classes={{ text: classes.menuButtonText  }}
                                    // classes={{ text: classes.menuButtonText, color: classes.active }}
                                        className = {menuStyle}
                                    // className = {`${classes.menuButtonText} ${classes.active}`}
                                //    if (selectedButton.name === element.name ) {}
                          
                                      key={element.name}
                                    >
                                        
                                      {element.name}
                                    </Button>
                                  );
                            })}
                        </Hidden>
                    </div>
                </Toolbar>
            </AppBar>
        
            <NavDrawer
        menuItems={menuItems}
        anchor="left"
        open={windowStatys}
        
        // selectedItem={selectedTab}
        onClose={mobileDrawerClose}
      />
    </div>
        

    )
}