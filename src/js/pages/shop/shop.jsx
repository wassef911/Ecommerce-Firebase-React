import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../../redux/shop/shopActions";

import CollectionOverviewContainer from "../../containers/HOC/collectionsOverview-Container";
import CollectionPageContainer from "../../containers/HOC/collection-Container";

function Shop({ match, fetchCollectionsStart }) {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);
  return (
    <div id="scrollBarStyle">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
