import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  withStyles,
  IconButton,
  Typography,
  withWidth,
  isWidthUp,
  Toolbar
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, useTheme } from "@material-ui/core";
import { SportsRugbySharp } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  headSection: {
    width: 240
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  blackList: {
    backgroundColor: grey[800]/*  "rgba(26, 21, 21, 1);" */,
    height: "100%"
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  text: {
    color: theme.palette.common.white
  }
  

}))

export const NavDrawer = (props) =>{
  const theme = useTheme();
    const classes = useStyles(theme);
    return(
        <Drawer variant="temporary"
        open={props.open} 
        onClose={props.onClose}
        anchor={props.anchor}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }} 
          >
      <Toolbar className={classes.headSection}>
        <ListItem
          style={{
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0),
            height: "100%",
           
            justifyContent: props.anchor === "left" ? "flex-end" : "flex-start"  
          }}
          disableGutters
        >
          <ListItemIcon className={classes.closeIcon}>
            <IconButton onClick={props.onClose} aria-label="Close Navigation">
              <CloseIcon color="secondary"  />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Toolbar>
      <List className={classes.blackList}>
        {props.menuItems.map(element => {
          if (element.link) {
            return (
              <Link
                key={element.name}
                to={element.link}
                className={classes.noDecoration}
                onClick={props.onClose}
              >
                <ListItem
                  button
                  selected={props.selectedItem === element.name}
                  /**
                   * We disable ripple as it will make a weird animation
                   * with primary and secondary color
                   */
                  disableRipple
                  disableTouchRipple
                >
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" className={classes.text}>
                        {element.name}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            );
          }
          return (
            <ListItem button key={element.name} onClick={element.onClick}>
              <ListItemIcon>{element.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" className={classes.text}>
                    {element.name}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
    )
}