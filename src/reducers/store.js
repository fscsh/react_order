import "regenerator-runtime/runtime"
import { createStore , compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas'
import rootReducer from './index'



export default (initialState) =>{
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

    const store = createStore(
        rootReducer,
        initialState,
        enhancers
    );
    sagas.map(sagaMiddleware.run);
    return store;
}
