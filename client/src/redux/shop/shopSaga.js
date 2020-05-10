import { takeLatest, put, call, all } from "redux-saga/effects";

import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase";

import shopActionTypes from "./shopType";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = db.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export default function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
