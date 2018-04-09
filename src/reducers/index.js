import { combineReducers } from 'redux';
import produceReducer from './produceReducer';
const rootReducer = combineReducers({
    product : produceReducer
});

export default rootReducer;
