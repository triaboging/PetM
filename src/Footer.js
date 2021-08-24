import React from 'react'
import { Container, Link, makeStyles, Typography } from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
        theme.palette.grey[200],
        zIndex: "10"
    },
    footerText: {
        display : "flex",
        justifyContent: "center",
        alignItems: "center"
    }
  }))
  function Copyright() {
    const classes = useStyles()
    return (
    
      <Typography  className = {classes.footerText} variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website 
        </Link>{'_'}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
export const Footer = () => {
    const classes = useStyles()
    return(
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography className = {classes.footerText} variant="body2" color="textSecondary">
                    оырыодвла
                </Typography>
                <Copyright/>
            </Container>
        </footer>
    )
}