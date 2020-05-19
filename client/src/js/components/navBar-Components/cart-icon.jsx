import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";

function CartIcon({ itemsCount, toggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count ">{itemsCount}</span>
    </div>
  );
}

export default CartIcon;
