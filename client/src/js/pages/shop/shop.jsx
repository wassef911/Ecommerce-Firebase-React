import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../../redux/shop/shopActions";

import Spinner from "../../components/spinner";
const ShopCollectionContainer = lazy(() =>
  import("../../containers/HOC/shopCollection.Container")
);
const CollectionPageContainer = lazy(() =>
  import("../../containers/HOC/collection-page.Container")
);

function Shop({ match, fetchCollections }) {
  useEffect(() => {
    fetchCollections();
  });
  return (
    <div id="scrollBarStyle">
      <Suspense fallback={Spinner}>
        <Route
          exact
          path={`${match.path}`}
          component={ShopCollectionContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
