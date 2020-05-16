import React from "react";
import { Mutation, Query } from "react-apollo";
import { gql } from "apollo-boost";

import { GET_CART_ITEMS } from "../../../graphQL/querys";
import CartDropDown from "./cartDropDown";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const cartDropDownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {(toggleCartHidden) => (
      <Query query={GET_CART_ITEMS}>
        {({ data }) => (
          <CartDropDown
            cartItems={data.cartItems}
            toggleCartHidden={toggleCartHidden}
          ></CartDropDown>
        )}
      </Query>
    )}
  </Mutation>
);
export default cartDropDownContainer;
