import { all, call } from "redux-saga/effects";

import shopSagas from "./shop/shopSaga";
import userSagas from "./user/userSaga";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas)]);
}
