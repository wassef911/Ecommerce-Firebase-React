import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CartIcon from "./cart-icon";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const cartIcontContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {(toggleCartHidden) => (
      <CartIcon toggleCartHidden={toggleCartHidden}></CartIcon>
    )}
  </Mutation>
);
export default cartIcontContainer;
