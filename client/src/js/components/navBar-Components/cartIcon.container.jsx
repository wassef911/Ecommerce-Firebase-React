import React from "react";
import { Mutation, Query } from "react-apollo";
import { gql } from "apollo-boost";

import { GET_ITEM_COUNT } from "../../../graphQL/querys";
import CartIcon from "./cart-icon";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;
const cartIcontContainer = () => (
  <Query query={GET_ITEM_COUNT}>
    {({ data }) => (
      <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {(toggleCartHidden) => (
          <CartIcon
            itemsCount={data.itemsCount}
            toggleCartHidden={toggleCartHidden}
          ></CartIcon>
        )}
      </Mutation>
    )}
  </Query>
);
export default cartIcontContainer;
