import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../../redux/shop/shopActions";

import ShopCollectionContainer from "../../containers/HOC/shopCollection.Container";
import CollectionPageContainer from "../../containers/HOC/collection-page.Container";

function Shop({ match, fetchCollections }) {
  useEffect(() => {
    fetchCollections();
  });
  return (
    <div id="scrollBarStyle">
      <Route exact path={`${match.path}`} component={ShopCollectionContainer} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
