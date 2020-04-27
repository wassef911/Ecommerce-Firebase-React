import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../../redux/shop/shopActions";
import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../../firebase/firebase";

import WithSpinner from "../../containers/with-spinner";
import CollectionOverview from "../../containers/shopCollection";
import CollectionPage from "../../containers/collection-page";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function Shop({ match, updateCollections }) {
  const [loading, setloading] = useState(true);

  const unsubscribeFromSnapshot = null;
  useEffect(() => {
    const collectionRef = db.collection("collections");
    collectionRef.get().then((snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      setloading(false);
    });
  }, []);
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
