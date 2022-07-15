import React from "react";
import  {useActions} from "./Action";




export const Context = React.createContext();


const initialState = {
    currentUser: null,
    success: false,
    error: false,
    users : [
        { name: "admin",
            email: "admin@yahoo.com",
            password: "none",
            balance: 0
        },
        {
            name: "user",
            email: "user@yahoo.com",
            password: "password",
            balance: 0
        } ]
}

const reducer = (state, action) =>{
        if (action.type === "ADD_ACCOUNT"){
            return {...state, newAccounts: action.payload}
        } else if (action.type === "LOGIN"){
            return {...state, authAccount: action.payload}
        } else if (action.type === "UPDATE_USER_BALANCE" ) {
            return {...state, users: action.payload}
        } else if (action.type === "SUCCESS"){
            return {...state, success: action.payload}
        } else if (action.type === "ERROR") {
            return {...state, error: action.payload}
        }
}


export function ProvideContext(props) {
    const[state, handle] = React.useReducer(reducer, initialState)
    const actions = useActions(state, handle);
    const value = {state, handle, actions};

    return<Context.Provider value={value}> {props.children} </Context.Provider>
}
