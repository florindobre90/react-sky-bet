import { takeEvery, put } from 'redux-saga/effects';
import { ActionTypes, getEventsSuccess, getMarkets, getOutcomes } from './actions';


export default function* rootSaga() {
    yield takeEvery(ActionTypes.GET_EVENTS, getEvents);
}

function* getEvents(action) {
    // console.log('sagas.action.payload', action.payload);
    const response = yield fetchFromApi('football/live?primaryMarkets=' + action.payload);
    if (response) {
        yield put(getEventsSuccess(response));
    }

    if(action.payload) {
        const marketsArray = Object.keys(response.events).map((item, i) => {
            return response.events[item].markets[0];
        });

        const markets = [];
        const outcomes = [];

        for (let marketId of marketsArray) {
            const marketDetails = yield fetchFromApi('sportsbook/market/' + marketId);
            // console.log('saga.for.market', marketDetails);
            for (let outcomeId of marketDetails.market.outcomes) {
                const outcomeDetails = yield fetchFromApi('sportsbook/outcome/' + outcomeId);
                // console.log('saga.for.outcome', outcomeDetails);
                outcomes.push(outcomeDetails);
            }
            markets.push(marketDetails.market);
        }

        yield put(getMarkets(markets));
        yield put(getOutcomes(outcomes));

        console.log('sagas.markets', markets);
        console.log('sagas.outcomes', outcomes);
    }
}

function fetchFromApi(path) {
    return fetch(`http://localhost:8888/${path}`).then(response => response.json());
}