import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

// store without redux-logger
let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// store with redux-logger
// let storeWithLogger = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;