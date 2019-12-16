import Router from "next/router";

import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_LOGOUT,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILURE
} from './actionTypes';


export const authStart = () => {
    return {
        type: AUTH_START
    };
};
export const authSuccess = (token, userProfile, newsFeeds, searchEmployee) => {
    return {
        type: AUTH_SUCCESS,
        userData: token,
        userProfile: userProfile,
        newsFeeds: newsFeeds,
        searchEmployee: searchEmployee
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

export const actLogout = () => {
    return async dispatch => {
        const response = await fetch('/api/auth/logout', {
            method: 'POST',
            credentials: 'same-origin',
        })
        if(response.ok){
            dispatch(logout());
            Router.push('/login');
        }
    }
}

export const updateRequest = () => {
    return {
        type: UPDATE_PASSWORD_REQUEST
    }
}

export const updateSuccess= (success) => {
    return {
        type: UPDATE_PASSWORD_SUCCESS,
        success: success
    }
}

export const updateFailure = (error) => {
    return {
        type: UPDATE_PASSWORD_FAILURE,
        error: error

    }
}



const WINDOW_USER_SCRIPT_VARIABLE = '__USER__';

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
            dispatch(authSuccess(res.userData, res.userProfile, res.searchEmployee, res.newsFeeds))
            if(typeof window !== 'undefined'){
                window[WINDOW_USER_SCRIPT_VARIABLE] = res.userData || {} ;
            }
            Router.push("/");
        }else {
            dispatch(authFail(response.error))
        }
    };
};


export const updatePassword = (new_password, user_id) => {
    return async dispatch => {
        dispatch(updateRequest());

        const response = await fetch('/api/auth/update_password', {
            method: 'POST',
            headers: {
                // Check what headers the API needs. A couple of usuals right below
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // Validation data coming from a form usually
                new_password,
                user_id
            })
        })
        if(response.ok){
            const res = await response.json();
            dispatch(updateSuccess(res.success))
            console.log(res);
            Router.push("/");
        }else {
            dispatch(updateFailure(response.error))
        }
    }
}

