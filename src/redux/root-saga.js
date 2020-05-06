import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shopSaga";
import { onGoogleSignInStart } from "./user/userSaga";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(onGoogleSignInStart)]);
}
