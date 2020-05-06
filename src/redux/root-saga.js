import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shopSaga";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
