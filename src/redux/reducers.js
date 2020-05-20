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
        case ActionTypes.GET_MARKETS: {
            const marketsGrouped = action.payload.reduce(( acc, market ) => {
                if(acc[market.marketId]) {
                    acc[market.marketId].push(market);
                    return acc;
                }
                else {
                    acc[market.marketId] = [market];
                    return acc;
                }
            }, {} );

            return {
                ...state,
                markets: marketsGrouped,
                isLoading: false
            };
        }
        case ActionTypes.GET_OUTCOMES: {
            // console.log('reducer.get.outcomes', action.payload);
            const outcomesGrouped = action.payload.reduce(( acc, outcome ) => {
                // console.log('reducer.outcome.outcomes', outcome);
                if(acc[outcome.outcome.marketId]) {
                    acc[outcome.outcome.marketId].push(outcome.outcome);
                    return acc;
                }
                else {
                    acc[outcome.outcome.marketId] = [outcome.outcome];
                    return acc;
                }
            }, {} );
            console.log('reducer.get.outcomesGrouped', outcomesGrouped);
            return {
                ...state,
                outcomes: outcomesGrouped,
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
