import React from 'react'
import { useCallback, useRef, useContext } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import {Context} from './App'
import { Alert, CustomizedSnackbars } from './SuccessAlert';
export const ConfirmationPage=()=>{
const setDialogOpen = useContext(Context)
let history = useHistory()
     const [start, setStart] = React.useState(true)
    const [timer, setTimer] = React.useState(500)
    
   let timerRef = useRef()
   const decreaseTimer = () => setTimer((prev) => prev-1)
   useEffect(()=>{
    timerRef.current = setInterval(decreaseTimer,1000)
    return () => clearInterval(timerRef.current);

   },[])

   if(timer === 0 ){
    clearInterval(timerRef.current);
    history.push('/')
    setDialogOpen()
    
   }

    return(
        <div style={{marginTop:"100px", textAlign:"center"}}>
            akk has been confirmated...
            Вы будите переадресованы на страницу аутентификации через {timer} секунд...
            <CustomizedSnackbars/>
        </div>  
         )
}