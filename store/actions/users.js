import { 
    FECTH_USER_DATA,
    FETCH_USER_TEAM,
    FETCH_HANDLE_ERROR
} from './actionTypes';

export const handleError = (error) => {
    return {
        type: FETCH_HANDLE_ERROR,
        error: error
    }
}

export const fetchUserData = (userProfile, userPosition, userHealthTracker, userTransactions, userResultDocument, userNurseVisit, userSchedule, userSalaryDetails, userIncentives,
    userHMOplan,
    userHMOdependent,
    userLoans
    ) => {
    return {
        type: FECTH_USER_DATA,
      
        userProfile: userProfile,
        userPosition: userPosition,
        userHealthTracker: userHealthTracker,
        userTransactions: userTransactions,
        userResultDocument: userResultDocument,
        userNurseVisit: userNurseVisit,
        userSchedule: userSchedule,
        userSalaryDetails: userSalaryDetails,
        userIncentives: userIncentives,
        userHMOplan: userHMOplan,
        userHMOdependent: userHMOdependent,
        userLoans: userLoans
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
        const response  = await fetch('/api/auth/home', {
            method: 'GET',
            credentials: 'same-origin'
        })
        if(response.ok){
            const res = await response.json();
            dispatch(fetchUserData(
               
                res.userProfile, 
                res.userPosition, 
                res.userHealthTracker,
                res.userTransactions, 
                res.userResultDocument, 
                res.userNurseVisit, 
                res.userSchedule,
                res.userSalaryDetails,
                res.userIncentives,
                res.userHMOplan,
                res.userHMOdependent,
                res.userLoans
                ));
        } else {
            console.log(response.error)
            dispatch(handleError(response.error))
        }
        
    };
};

export const getUserTeam = () => {
    return async dispatch => {
        const response  = await fetch('/api/auth/team', {
            method: 'GET',
            credentials: 'same-origin'
        })
        if(response.ok){
            const res = await response.json();
            dispatch(fetchUserTeam(res.userTeamMembers));
        } else {
            console.log(response.error)
            dispatch(handleError(response.error))
        }
        
    };
};

