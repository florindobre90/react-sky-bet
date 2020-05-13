export const ActionTypes = {
    GET_EVENTS: 'GET_EVENTS',
    GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS'
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