import {
    FETCH_HOME_EVENTS,
    FETCH_EVENT_LIKES,
    FETCH_HANDLE_ERROR,
    EVENT_LIKE,
    EVENT_UNLIKE,
    FETCH_BRANCH,
    FETCH_BRANCH_FAILED,
    FETCH_EVENT_LOCATION
} from '../actions/actionTypes';

const initialState = {
    homeEvents: [],
    eventLikes: [],
    initBranches: [],
    eventList: [],
    eventLocation: null,
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

export const fetchInitHome = (state, action) => {
    return updateObject(state, {
        initBranches: action.initBranches,
        eventList: action.eventList
    })
}

export const fetchEventLocation = (state, action) => {
    return updateObject(state, {
        eventLocation: action.eventLocation
    })
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HOME_EVENTS: return fetchHomeEvents(state,action);
        case FETCH_EVENT_LIKES: return fetchEventLikes(state,action);
        case FETCH_HANDLE_ERROR: return handleError(state, action);
        case EVENT_LIKE: return eventLike(state, action);
        case FETCH_BRANCH: return fetchInitHome(state, action);
        case FETCH_BRANCH_FAILED: return handleError(state, action);
        case FETCH_EVENT_LOCATION: return fetchEventLocation(state, action);
        default:
            return state;
    }
}