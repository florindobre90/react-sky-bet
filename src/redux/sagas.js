import { takeEvery, put } from 'redux-saga/effects';
import { ActionTypes, getEventsSuccess } from './actions';

export default function* rootSaga() {
    yield takeEvery(ActionTypes.GET_EVENTS, getEvents);
}

function* getEvents(action) {
    const response = yield fetchFromApi('football/live');
    if (response) {
        //console.log('saga', response);
        yield put(getEventsSuccess(response));
    }
}

function fetchFromApi(path) {
    return fetch(`http://localhost:8888/${path}`).then(response => response.json());
}