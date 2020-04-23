import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(function (sum, value) {
      return sum + value.quantity;
    }, 0)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(function (sum, value) {
      return sum + value.price * value.quantity;
    }, 0)
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);
