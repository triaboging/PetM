import axios from 'axios'
import React, { useCallback, useContext }  from 'react'
import { Context } from '../App'
import { setUser, logout, setLoader, createPost } from '../reducers/userReducer'
import { disableLoader, getPosts } from './../reducers/userReducer';

export const registration = async (email, login, password, context) => {
    
    try{
        
        const response = await axios.post(`http://localhost:5000/api/auth/register`,
    {email, login, password})
    const message =  response.data.message
    console.log('fromfuncmessage', context.httpMessage)
    // alert(message)
        context.setStatusMessage(message)
        if(message === 'Пользователь создан'){
            context.handleClose()
           
            
        }
        
    }
    
    catch(e){
        // alert(e.response.data.message)
        const message =  e.response.data.message
        context.setStatusMessage(message)
        console.log(e)
    }
    
}
export const login =  (email, password, history) => {
    
    return async dispatch => {
        dispatch(setLoader()) 
        try{
            const response = await axios.post(`http://localhost:5000/api/auth/login`,
        {email, password})
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
        alert( response.data.message)
        alert( response.data.token)
        history.push('/home')
        }
        
        
        catch(e){
            // alert(e.response.data.message)
            dispatch(disableLoader());
            console.log(e)
        }
    }
    
}
export const auth =  () => {
    return async dispatch => {
        try {
            console.log('мы тута224')
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            console.log('мы тута1')
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log('мы тута')
        } catch (e) {
           
            localStorage.removeItem('token')
        }
    }
}
export const createPostFunction = (form, history) => {
    
    return async dispatch => {
        // let history = useHistory()
        dispatch(setLoader()) 
        try {
            console.log('мы тута224')
            const response = await axios.post(`http://localhost:5000/api/auth/create`,
            {...form},
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}},
                
            )
            const newPost = response.data.post
            // dispatch(createPost(newPost))
            console.log('мы тута2')
            
            history.push('/links')
            console.log('мы тута3')
            
            // localStorage.setItem('token', response.data.token)
            console.log('мы тута4')
            
        } catch (e) {
            
            dispatch(disableLoader());
            console.log(e)
            
        }
    }
}
export const getPostsFunction = () => {
    
    return async dispatch => {
       
        dispatch(setLoader()) 
        try {
            console.log('мы тута3333')
            const response = await axios.get(`http://localhost:5000/api/auth/getpost`,
            
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}},
                
            )
            const posts = response.data.posts
            dispatch(getPosts(posts))
            console.log('мы тута2')
            
            
            console.log('мы тута5000')
            
            // localStorage.setItem('token', response.data.token)
            console.log('мы тута4')
            
        } catch (e) {
            
            dispatch(disableLoader());
            console.log(e)
            
        }
    }
}

export const getDetailLink = (linkId, setLink)=>{
    return async dispatch => {
       
        dispatch(setLoader()) 
    try{
        const response = await axios.get(`http://localhost:5000/api/auth/detail/${linkId}`,
            
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}},
                
            )
        setLink(response.data)

        dispatch(disableLoader());
    }catch(e){
        dispatch(disableLoader());
            console.log(e)
    }
}}