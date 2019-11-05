import {
    FECTH_USER_DATA
} from '../actions/actionTypes';

const initialState = {
    userProfile: null,
    userPosition: null,
    error: null,
    isLoading: false
}
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


export const getUserData = (state, action) => {
    return updateObject(state, {
        userProfile: action.userProfile,
        userPosition: action.userPosition
    })
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FECTH_USER_DATA: return getUserData(state, action);
        default:
            return state;
    }
}