import { combineReducers } from "redux";
import { ActionTypes } from "./actions";

const initialState = {
    events: [],
    isLoading: false
};

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_EVENTS: {
            console.log("action", action);
            return {
                ...state,
                isLoading: true
            };
        }
        case ActionTypes.GET_EVENTS_SUCCESS: {
            console.log("action", action.payload.events);
            return {
                ...state,
                events: action.payload.events,
                isLoading: false
            };
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    eventsStore: eventsReducer
});
