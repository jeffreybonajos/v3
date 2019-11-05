import Router from "next/router";

import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_LOGOUT
} from './actionTypes';


export const authStart = () => {
    return {
        type: AUTH_START
    };
};
export const authSuccess = (token, user) => {
    return {
        type: AUTH_SUCCESS,
        userData: token,
        userProfile: user
    };
};
export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        error: error

    };
};
export const logout = () => {
    return {
        type: AUTH_LOGOUT
    }
}

export const auth = (username, password) => {
    return async dispatch => {
        dispatch(authStart());
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                // Check what headers the API needs. A couple of usuals right below
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // Validation data coming from a form usually
                username,
                password
            })
        })
        if(response.ok){
            const res = await response.json();
            console.log(res)
            dispatch(authSuccess(res.userData, res.userProfile))
            Router.push("/");
        }else {
            dispatch(authFail(response.error))
        }
    };
};

