import { all, call } from "redux-saga/effects";

import shopSagas from "./shop/shopSaga";
import userSagas from "./user/userSaga";
import cartSagas from "./cart/cartSaga";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
