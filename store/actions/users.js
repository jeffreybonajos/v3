import { 
    FECTH_USER_DATA,
    FETCH_USER_TEAM
} from './actionTypes';


export const fetchUserData = (userProfile, userPosition, userHealthTracker, userTransactions, userResultDocument, userNurseVisit) => {
    return {
        type: FECTH_USER_DATA,
        userProfile: userProfile,
        userPosition: userPosition,
        userHealthTracker: userHealthTracker,
        userTransactions: userTransactions,
        userResultDocument: userResultDocument,
        userNurseVisit: userNurseVisit
    }
}

export const fetchUserTeam = (userTeamMembers) => {
    return {
        type: FETCH_USER_TEAM,
        userTeamMembers: userTeamMembers
    }
    
}

export const getUserData = () => {
    return async dispatch => {
        const response  = await fetch('http://localhost:3000/api/auth/home', {
            method: 'GET',
            credentials: 'same-origin'
        })
        if(response.ok){
            const res = await response.json();
            dispatch(fetchUserData(res.userProfile, res.userPosition, res.userHealthTracker, res.userTransactions, res.userResultDocument, res.userNurseVisit));
        } else {
            console.log(response.error)
            dispatch(response.error)
        }
        
    };
};

export const getUserTeam = () => {
    return async dispatch => {
        const response  = await fetch('http://localhost:3000/api/auth/team', {
            method: 'GET',
            credentials: 'same-origin'
        })
        if(response.ok){
            const res = await response.json();
            console.log('action',res)
            dispatch(fetchUserTeam(res.userTeamMembers));
        } else {
            console.log(response.error)
            dispatch(response.error)
        }
        
    };
};
