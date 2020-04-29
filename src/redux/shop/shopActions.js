import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase";

import shopActionTypes from "./shopTypes";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (err) => ({
  type: shopActionTypes.fetchCollectionsFailure,
  payload: err,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = db.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
  };
};
