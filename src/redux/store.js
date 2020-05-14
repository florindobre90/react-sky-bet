import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';

const logger = createLogger({
    collapsed: true
});
const sagaMiddleware = createSagaMiddleware();

export default createStore(
    rootReducer,
    composeWithDevTools({
        maxAge: 1000,
    })(
        applyMiddleware(
            sagaMiddleware,
            logger
        ),
    ),
);

sagaMiddleware.run(rootSaga);