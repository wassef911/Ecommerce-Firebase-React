import { takeLatest, put, call } from "redux-saga/effects";

import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase";

import ShopActionTypes from "./shopTypes";

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
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}
