import { gql } from "apollo-boost";

export const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;
