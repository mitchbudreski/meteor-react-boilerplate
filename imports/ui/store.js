import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const logger = createLogger();
const middlewares = [ReduxThunk, logger];

const Store = createStore(
    rootReducer,
    {},
    applyMiddleware(...middlewares)
);

export default Store;