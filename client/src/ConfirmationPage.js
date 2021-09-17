import React from 'react'
import { useCallback, useRef, useContext } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import {Context} from './App'
import { useSelector } from 'react-redux';
export const ConfirmationPage=(props)=>{
const {openLoginFunction, handleClose} = useContext(Context)
const isAuth = useSelector(state => state.userReducer.isAuth)
let history = useHistory()
    const [timer, setTimer] = React.useState(8)
   let timerRef = useRef()
   const decreaseTimer = () => setTimer((prev) => prev-1)
   useEffect(()=>{
    timerRef.current = setInterval(decreaseTimer,1000)
    return () => clearInterval(timerRef.current);
   },[])
   if(timer === 0 ){
    clearInterval(timerRef.current);
    history.push('/home')
    openLoginFunction()
   }
   const messageend =` ${timer} секунд...`
    return(
        <div style={{marginTop:"100px", textAlign:"center"}}>
            {props.message}&nbsp; {messageend}
        </div>  
         )
}