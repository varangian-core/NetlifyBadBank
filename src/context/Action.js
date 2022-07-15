
import {findIndex} from "lodash";

export const useActions = (state, handle)  => {

    const addAccount = (newAccount) => {
        let newAccounts = [...state.users] //TODO: define users
        newAccounts.push(newAccount);
        handle({
            type: "ADD_ACCOUNT",
            payload: newAccounts
        });
    };

    const Authenticate= (auth) => {
        let currentUser= state.users.find(user => user.email === auth.email &&
            user.password === auth.password )
       //if authentication is success handle it, otherwise provide a message
        if (currentUser) {
            handle({
                type: "LOGIN",
                payload: {...currentUser}
            })
        } else {
            alert("Invalid login credentials,\n please try again")
        }
    }


    const setSuccess = (values) => {
        handle( {
            type: "SUCCESS",
            payload: values
        });
    }



    const setError = (value) => {
        handle({
            type: "ERROR",
            payload: value
        })
    }


    const deposit= (amount) => {
        let userIndex = findIndex(state.users, user => user.email ===state.currentUser.email)
        let newUsers = [...state.users];
        newUsers[userIndex].balance= newUsers[userIndex].balance + amount;
        handle({
            type: "UPDATE_USER_BALANCE",
            payload: {...state.currentUser, balance: state.currentUser.balance + amount}
        });
    }

    const withdraw = (amount) => {
        let userIndex = findIndex(state.users, user => user.email ===state.currentUser.email)
        let newUsers = [...state.users];
        newUsers[userIndex].balance= newUsers[userIndex].balance - amount;
        handle({
            type: "UPDATE_USER_BALANCE",
            payload: {...state.currentUser, balance: state.currentUser.balance - amount}
        });
    }





return {
    addAccount,
    Authenticate,
    setSuccess,
    setError,
    deposit,
    withdraw
};
};