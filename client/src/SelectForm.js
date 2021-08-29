import React from 'react'
import LoginForm from './LoginForm';
import RegistrForm from './RegistrForm'
export default function SelectForm({dialogOpen}) {
    const dialog = React.useCallback ( ()=> { 
        switch(dialogOpen){
        case "registr":
            return(
                <RegistrForm/>
            );
        case "login":{
            return(
                <LoginForm/>
            )
        }    
        default:
    }
},[dialogOpen])
    return(
        <>
        {dialog()}
        </>
    )
}