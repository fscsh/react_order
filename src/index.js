import "regenerator-runtime/runtime"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import * as productApi from './lib/index'
import configureStore from './reducers/store';
import App from './components/app';
import { fetchProducts ,fetchCart} from './actions/index';
import './lib/cart/index'

const store = configureStore({ });


ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>
    , document.querySelector('.container'));
