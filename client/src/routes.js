import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ConfirmationPage } from './ConfirmationPage'
import { MainPage } from './MainPage'
import { ConfirmationMailPage } from './ConfirmationMailPage';
export const useRoutes = () => {
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const isActivated = useSelector(state => state.userReducer.isActivated)
    const confirmationMessage = `akk has been confirmated...
    Вы будите переадресованы на страницу аутентификации через`;
    const confirmationMailMessage =  `На указанный почтовый ящик было отправлено письмо с подтверждение регистраци <br/>
    Вы будите автоматически переадресованы на страницу аутентификации через `
    const confirmationPasswordMessage = ` На указанный почтовый ящик было отправлено письмо с новым паролем <br/>
    Вы будите автоматически переадресованы на страницу аутентификации через`
if(isAuth) {
    return(
        <Switch>
            <Route path="/links" exact>
                {/* <LinksPage /> */}
            </Route>
            
            <Route path='/create' exact>
                {/* <CreatePost/> */}
            </Route>
            <Route path='/detail/:id' exact>
                {/* <DetailPage/> */}
            </Route>
            <Route path='/confirmation' exact>
                <ConfirmationPage/>
            </Route>
           
            <Route path="/home" exact>
            <MainPage />
            </Route>
            <Redirect to="/home" exact/>
        </Switch>
    )
} return (
    <Switch>
        <Route path='/restore' exact>
                <ConfirmationPage message = {confirmationPasswordMessage}/>
        </Route>
        <Route path='/confirmation' exact>
                <ConfirmationPage message = {confirmationMessage}/>
        </Route>
        <Route path = "/home" exact>
            <MainPage />
        </Route>
        <Route path='/confirmationmailpage' exact>
                <ConfirmationPage massage = {confirmationMailMessage}/>
        </Route>
    
        <Redirect to="/home" exact/>
    </Switch>
)
}