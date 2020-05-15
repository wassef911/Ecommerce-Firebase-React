import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionPage from "../collection-page";
import Spinner from "../../components/spinner";

const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionByTitle($name: String) {
    getCollectionByTitle(title: $name) {
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
  console.log(match.params.collectionId.trim());
  return (
    <Query
      query={GET_COLLECTIONS_BY_TITLE}
      variables={{ name: match.params.collectionId }}
    >
      {({ loading, error, data: getCollectionByTitle }) => {
        console.log("rabi");
        console.log(error);

        if (loading) return <Spinner />;
        return <CollectionPage collection={getCollectionByTitle} />;
      }}
    </Query>
  );
}
export default CollectionPageContainer;
