import React from 'react'
import { useCallback, useRef, useContext } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import {Context} from './App'
import { useSelector } from 'react-redux';
export const ConfirmationMailPage=()=>{
const {openLoginFunction} = useContext(Context)
let history = useHistory()

    const [start, setStart] = React.useState(true)
    const [timer, setTimer] = React.useState(10)
    
   let timerRef = useRef()
   const decreaseTimer = () => setTimer((prev) => prev-1)
   useEffect(()=>{
    timerRef.current = setInterval(decreaseTimer,1000)
    return () => clearInterval(timerRef.current);

   },[])

   if(timer === 0 ){
    clearInterval(timerRef.current);
    history.push('/')
    openLoginFunction()
    
   }

    return(
        <div  style={{marginTop:"100px", textAlign:"center"}}>
            {/* На указанный почтовый ящик было отправлено письмо с подтверждение регистраци <br/>
            Вы будите автоматически переадресованы на страницу аутентификации через {timer} секунд... */}

        </div>  
         )
}