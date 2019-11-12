
import {
    AUTH_START, 
    AUTH_SUCCESS, 
    AUTH_FAIL,
    AUTH_LOGOUT
} from '../actions/actionTypes';

const initialState = {
    token: null,
    userProfile: null,
    error: null,
    isLoading: false
}

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


export const authStart = (state, action) => {
    return updateObject(state, {error: null, isLoading: true});
};
export const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.userData,
        userProfile: action.userProfile,
        error: null,
        isLoading: false
    });
};
export const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        isLoading: false
    });
};

export const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        user: null
    })
}


export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START: return authStart(state, action);
        case AUTH_SUCCESS: return authSuccess(state, action) ;
        case AUTH_FAIL: return authFail(state, action);
        case AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}