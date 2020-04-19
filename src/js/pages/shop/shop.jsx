import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../containers/shopCollection";
import CollectionPage from "../../containers/collection-page";

function Shop({ match }) {
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
