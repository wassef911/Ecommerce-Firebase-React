import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CardPreview from "./card-preview";

const ADD_ITEM_TO_CART = gql`
  mutation addItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;
function cardPreviewContainer(props) {
  return (
    <Mutation mutation={ADD_ITEM_TO_CART}>
      {(addItemToCart) => (
        <CardPreview
          {...props}
          addItem={(item) => addItemToCart({ variables: { item } })}
        />
      )}
    </Mutation>
  );
}

export default cardPreviewContainer;
