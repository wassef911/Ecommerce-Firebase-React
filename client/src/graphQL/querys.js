import { gql } from "apollo-boost";

export const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;
export const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export const GET_ITEM_COUNT = gql`
  {
    itemsCount @client
  }
`;
