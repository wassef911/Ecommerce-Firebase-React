import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionOverview from "../shopCollection";
import Spinner from "../../components/spinner";

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

function ShopCollectionContainer() {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ loading, data }) => {
        if (loading) return <Spinner />;
        return <CollectionOverview shopData={data.collections} />;
      }}
    </Query>
  );
}
export default ShopCollectionContainer;
