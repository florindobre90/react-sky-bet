import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

export default createStore(
    rootReducer,
    composeWithDevTools({
        maxAge: 1000,
    })(
        applyMiddleware(
            sagaMiddleware,
        ),
    ),
);

sagaMiddleware.run(rootSaga);