import React from 'react'
import LoginForm from './LoginForm';
import RegistrForm from './RegistrForm'
import RestorePasswordForm from './RestorePasswordForm';
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
        case "restore":{
            return(
                <RestorePasswordForm/>
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