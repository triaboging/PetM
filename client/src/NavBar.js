import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import IconButton from '@material-ui/core/IconButton';
import { AppBar, Button, Link, Toolbar, Typography } from '@material-ui/core';
// import { red } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import { flexbox } from '@material-ui/system';
import { CenterFocusStrong } from '@material-ui/icons';
import {NavDrawer} from './NavDrawer'
import classNames from 'classnames';


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
        backgroundColor: 'red'
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
    const classes = useStyles()
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
    const menuItems = [
        {
            link: "/",
            name: "Home",
            icon: <HomeIcon  className = {classes.text} /* className="text-white" */ />
        },
        {
            link: "/blog",
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
                                    <Link
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
                                    </Link>
                                );
                                }
                                return (
                                    <Button
                                      color="secondary"
                                      size="large"
                                      onClick={element.onClick}
                                      classes={{ text: classes.menuButtonText  }}
                                    // className = {classNames{classes.menuButtonText, classes.active}}
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