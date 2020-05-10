import { all, call, takeLatest, put } from "redux-saga/effects";

import { clearCart } from "./cartAction";
import userActionTypes from "../user/userType";

export function* signOutClearCart() {
  yield put(clearCart());
}

export function* onSignOutClearCart() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, signOutClearCart);
}

export default function* cartSagas() {
  yield all([call(onSignOutClearCart)]);
}
