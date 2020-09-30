import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../../redux/shop/shopActions";

import Spinner from "../../components/spinner";
const ShopCollection = lazy(() => import("../../containers/shopCollection"));
const CollectionPage = lazy(() => import("../../containers/collection-page"));

function Shop({ match, fetchCollections }) {
  useEffect(() => {
    fetchCollections();
  }, []);
  return (
    <div id="scrollBarStyle">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={ShopCollection} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Suspense>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
