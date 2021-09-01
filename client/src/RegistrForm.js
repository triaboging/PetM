import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react'
// import {registration} from '../actions/user'
import { Formik } from 'formik'
import * as yup from 'yup'
import { registration } from './actions/user';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  wrappper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px !important'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function RegistrForm(props) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const validationsShema = yup.object().shape({
    login: yup.string().min(2,'too shot')
    .max(15,'Too long').required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(2,'пароль не надежный')
    .max(15,'Too long').required('Required'),
  })
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.wrappper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        
            <Formik 
                validateOnBlur
                initialValues={{
                login:"",
                email: "",
                password: ""
                }}
                // validateOnBlur
                validationSchema = {validationsShema}
                onSubmit = {(values) => registration(values.email,values.login, values.password)}
                
            >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
        <form className={classes.form} noValidate>
          <TextField
            value = {values.login}
            type = {`text`}
            name = { `login`}
            onChange = {handleChange}
            onBlur = {handleBlur}
            
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            
            autoComplete="login"
            autoFocus
          />
          {touched.email && errors.email ? <div className = "alert">{errors.login}</div>:<div></div>}
          <TextField
            value = {values.email}
            type = {`text`}
            name = { `email`}
            onChange = {handleChange}
            onBlur = {handleBlur}
            
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            
            autoComplete="email"
            
          />
          {touched.email && errors.email ? <div className = "alert">{errors.email}</div>:<div></div>}
          <TextField
            value = {values.password}
            type = {`password`}
            id = "password"
            onChange = {handleChange}
            onBlur = {handleBlur}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            
            autoComplete="current-password"
          />
          {touched.password && errors.password ? <div className = "alert">{errors.password}</div>:<div></div>}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            disabled={ !isValid  }
            onClick = {handleSubmit}
            type = {`submit`}
            name="action"
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            /* onClick = {props.handleClickOpen} */
            onClick = {handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        )}
        </Formik>
        
      </div>
      
    </Container>
  );
}