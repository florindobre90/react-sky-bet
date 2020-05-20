export const ActionTypes = {
    GET_EVENTS: 'GET_EVENTS',
    GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
    GET_MARKETS: 'GET_MARKETS',
    GET_OUTCOMES: 'GET_OUTCOMES',
    SET_PRICE_TOGGLED: 'SET_PRICE_TOGGLED',
}

export function getEvents(opts) {
    return {
        type: ActionTypes.GET_EVENTS,
        payload: opts
    }
}

export function getEventsSuccess(data) {
    return {
        type: ActionTypes.GET_EVENTS_SUCCESS,
        payload: data
    }
}

export function getMarkets(data) {
    return {
        type: ActionTypes.GET_MARKETS,
        payload: data
    }
}

export function getOutcomes(data) {
    return {
        type: ActionTypes.GET_OUTCOMES,
        payload: data
    }
}

export function setPriceToggled(data) {
    return {
        type: ActionTypes.SET_PRICE_TOGGLED,
        payload: data
    }
}