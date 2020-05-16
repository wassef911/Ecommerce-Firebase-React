import { gql } from "apollo-boost";

import { GET_CART_HIDDEN } from "./querys";

export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      });
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden },
      });
      return !cartHidden;
    },
  },
};
