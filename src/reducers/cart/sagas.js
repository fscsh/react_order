import {put ,fork, takeLatest, call } from 'redux-saga/effects';
import { FETCH_CART, ADD_TO_CART } from '../../actions/actionType';
import { fetchCartSuccess, fetchCartFailure ,addToCartSuccess , addToCartFailure} from '../../actions/index';
import * as cartApi from '../../lib/cartApi';

export function* fetchCart(action) {
  try {
    const cart = yield call(cartApi.fetch);
    yield put(fetchCartSuccess(cart));
  } catch(error) {
    yield put(fetchCartFailure(error));
  }
}
export function* addToCart(action) {
  try {
    const cart = yield call(cartApi.addToCart,action.productId,action.quantity);
    yield put(addToCartSuccess(cart));
  } catch(error) {
    yield put(addToCartFailure(error));
  }
}


export function* watchFetchCart() {
  yield takeLatest(FETCH_CART, fetchCart);
}
export function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART, addToCart);
}

export default function* () {
  yield fork(watchFetchCart);
  yield fork(watchAddToCart);
}
