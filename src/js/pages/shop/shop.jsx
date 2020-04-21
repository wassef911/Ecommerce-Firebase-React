import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../../firebase/firebase";

import CollectionOverview from "../../containers/shopCollection";
import CollectionPage from "../../containers/collection-page";

function Shop({ match }) {
  const unsubscribeFromSnapshot = null;
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapShot) => {
      convertCollectionsSnapshotToMap(snapShot);
    });
  }, []);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
}

export default Shop;
