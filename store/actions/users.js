import { FECTH_USER_DATA } from './actionTypes';


export const fetchUserData = (userProfile, userPosition) => {
    return {
        type: FECTH_USER_DATA,
        userProfile: userProfile,
        userPosition: userPosition
    }
}

export const getUserData = () => {
    return async dispatch => {
        const response  = await fetch('/api/auth/home', {
            method: 'GET',
            credentials: 'same-origin'
        })
        if(response.ok){
            const {data} = await response.json();
            console.log(data)
            dispatch(fetchUserData(data.userProfile, data.userPosition));
        } else {
            dispatch(response.error)
        }
        
    };
};
