import React from 'react'
import { useCallback, useRef, useContext } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import {Context} from './App'
export const ConfirmationPage=()=>{
const setDialogOpen = useContext(Context)
let history = useHistory()
   /*  const [timer, setTimer] = React.useState(5)
    let intervalRef = useRef()
    const decreaseTimer = ()=> {
        setTimer((prev)=> prev-1)
        console.log(timer)
    }

    

React.useEffect(()=>{
    intervalRef.current = setInterval(decreaseTimer, 1000)
    return ()=> clearInterval(intervalRef.current) */


    const [start, setStart] = React.useState(true)
    const [timer, setTimer] = React.useState(5)
    
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




















//     const decreaseTimer = ()=> {
//         setTimer((prev)=> prev-1)
//         console.log(timer)
//     }

    

// React.useEffect(()=>{
//    const newTimer = setInterval(() => {
//     setTimer(timer - 1);
//   }, 1000);
//     return ()=> clearInterval(newTimer)
// },[timer])
    return(
        <div style={{marginTop:"100px", textAlign:"center"}}>
            akk has been confirmated...
            Вы будите переадресованы на страницу аутентификации через {timer} секунд...

        </div>  
         )
}