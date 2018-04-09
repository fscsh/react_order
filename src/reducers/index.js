import { combineReducers } from 'redux';
import produceReducer from './produceReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    product : produceReducer,
    cart : cartReducer

});

export default rootReducer;
