import {
    FETCH_HOME_EVENTS,
    FETCH_EVENT_LIKES,
    FETCH_HANDLE_ERROR,
    EVENT_LIKE,
    EVENT_UNLIKE,
    FETCH_BRANCH,
    FETCH_BRANCH_FAILED
} from '../actions/actionTypes';

const initialState = {
    homeEvents: [],
    eventLikes: [],
    initBranches: [],
    eventList: [],
    error: null
}
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


export const fetchHomeEvents = (state, action) => {
    return updateObject(state, {
        homeEvents: action.homeEvents
    });
}

export const fetchEventLikes = (state, action) => {
    return updateObject(state, {
        eventLikes: action.eventLikes
    });
}
export const handleError = (state, action) => {
    return updateObject(state, {
        error: action.error
    })
}

export const eventLike = (state, action) => {
    return updateObject(state, {
    })
}

export const fetchInitBranches = (state, action) => {
    return updateObject(state, {
        initBranches: action.initBranches,
        eventList: action.eventList
    })
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HOME_EVENTS: return fetchHomeEvents(state,action);
        case FETCH_EVENT_LIKES: return fetchEventLikes(state,action);
        case FETCH_HANDLE_ERROR: return handleError(state, action);
        case EVENT_LIKE: return eventLike(state, action);
        case FETCH_BRANCH: return fetchInitBranches(state, action);
        case FETCH_BRANCH_FAILED: return handleError(state, action);
        default:
            return state;
    }
}