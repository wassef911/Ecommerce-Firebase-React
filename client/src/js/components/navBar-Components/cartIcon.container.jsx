import React from "react";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import { gql } from "apollo-boost";

import { GET_ITEM_COUNT } from "../../../graphQL/querys";
import CartIcon from "./cart-icon";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;
const cartIcontContainer = ({ data: { itemsCount }, toggleCartHidden }) => (
  <CartIcon
    itemsCount={itemsCount}
    toggleCartHidden={toggleCartHidden}
  ></CartIcon>
);
export default compose(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(cartIcontContainer);
