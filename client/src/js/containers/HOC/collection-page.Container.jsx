import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionPage from "../collection-page";
import Spinner from "../../components/spinner";

const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($name: String) {
    getCollectionsByTitle(title: $name) {
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

function CollectionPageContainer({ match }) {
  return (
    <Query
      query={GET_COLLECTIONS_BY_TITLE}
      variables={{ name: match.params.collectionId.trim() }}
    >
      {({ loading, data }) => {
        if (loading) return <Spinner />;
        return <CollectionPage collection={data.getCollectionsByTitle} />;
      }}
    </Query>
  );
}
export default CollectionPageContainer;
