import { combineReducers } from "redux";
import { ActionTypes } from "./actions";

const initialState = {
    events: [],
    isLoading: false
};

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_EVENTS: {
            return {
                ...state,
                isLoading: true
            };
        }
        case ActionTypes.GET_EVENTS_SUCCESS: {
            const leaguesGrouped = action.payload.events.reduce(( acc, event ) => {
                if(acc[event.linkedEventTypeId]) {
                    acc[event.linkedEventTypeId].push(event);
                    return acc;
                }
                else {
                    acc[event.linkedEventTypeId] = [event];
                    return acc;
                }
            }, {} );

            return {
                ...state,
                events: action.payload.events,
                eventsGrouped: leaguesGrouped,
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
