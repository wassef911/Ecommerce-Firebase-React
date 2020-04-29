import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../../redux/shop/shopActions";
import {
  SelectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from "../../../redux/shop/shopSelector";

import WithSpinner from "../../containers/with-spinner";
import CollectionOverview from "../../containers/shopCollection";
import CollectionPage from "../../containers/collection-page";

function Shop({
  match,
  isCollectionFetching,
  isCollectionsLoaded,
  fetchCollectionsStartAsync,
}) {
  const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
  const CollectionPageWithSpinner = WithSpinner(CollectionPage);

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);
  return (
    <div id="scrollBarStyle">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: SelectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
