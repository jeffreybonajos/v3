import {
    FECTH_USER_DATA,
    FETCH_USER_TEAM,
  
} from '../actions/actionTypes';

const initialState = {
    userProfile: null,
    userPosition: null,
    userHealthTracker: null,
    userTeamMembers: [],
    searchEmployee: null,
    userTransactions: [],
    userResultDocument: [],
    userNurseVisit: [],
    userSchedule: null,
    userSalaryDetails: null,
    userIncentives: null,
    userHMOplan: null,
    userHMOdependent: [],
    userLoans: [],
    error: null,
    isLoading: false
}
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


export const fetchUserData = (state, action) => {
    return updateObject(state, {
      
        userProfile: action.userProfile,
        userPosition: action.userPosition,
        userHealthTracker: action.userHealthTracker,
        userTransactions: action.userTransactions,
        userResultDocument: action.userResultDocument,
        userNurseVisit: action.userNurseVisit,
        userSchedule: action.userSchedule,
        userSalaryDetails: action.userSalaryDetails,
        userIncentives: action.userIncentives,
        userHMOplan: action.userHMOplan,
        userHMOdependent: action.userHMOdependent,
        userLoans: action.userLoans
    });
}

export const fetchUserTeam = (state, action) => {
    return updateObject(state, {
        userTeamMembers: action.userTeamMembers
    });
}




export default (state = initialState, action) => {
    switch (action.type) {
        case FECTH_USER_DATA: return fetchUserData(state, action);
        case FETCH_USER_TEAM: return fetchUserTeam(state, action);
        default:
            return state;
    }
}