const SETUSER = 'SETUSER'
const  LOGOUT = 'LOGOUT'
const SETLOADER = 'SETLOADER'
const DISABLELOADER = 'DISABLELOADER'
const CREATEPOST = 'CREATEPOST'
const GETPOSTS = 'GETPOSTS'
const SETHTTPMESSAGE = 'SETHTTPMESSAGE'
const initialState = {
currentUser: {},
isAuth: false,
loading: false,
posts:[],
httpMessage:'',
isActivated: false
}
export default function userReducer (state = initialState, action) {
    switch(action.type){
        case SETLOADER:
            return{
                ...state, loading: true
            } 
        case DISABLELOADER:
            return{
                ...state, loading: false
            }
        case SETUSER:
            return{
                ...state,
                currentUser: action.payload,
                loading: false,
                isAuth: action.payload.isActivated
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                currentUser:{},
                isAuth :false,
                loading: false,
                posts:[]
            }
        case CREATEPOST:
        return{
            ...state,  loading: false, posts: [...state.posts, action.payload]
        }
        case GETPOSTS:
            return{
                ...state,
                
                 loading: false,
                //  posts: [...state.posts, ...action.payload]
                posts: action.payload
            }
        case SETHTTPMESSAGE:
            return{
                ...state,
                httpMessage: action.payload
            }
        default:
             return state
    }
}
export const setUser = (user)=>({type: SETUSER,  payload: user})
export const logout = () => ({type: LOGOUT})
export const setLoader = () => ({type: SETLOADER})
export const disableLoader = () =>({type: DISABLELOADER})
export const createPost = (post) =>({type: CREATEPOST, payload: post})
export const getPosts = (posts) => ({type: GETPOSTS, payload: posts})
export const getHttpMessage = (newmessage) =>({type: SETHTTPMESSAGE, payload: newmessage})