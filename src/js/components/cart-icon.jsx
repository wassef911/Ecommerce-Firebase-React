import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartAction";

function CartIcon({ toggleCartHidden, cartItems }) {
  let quantityOfItems = cartItems.map((value) => value.quantity);
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count ">
        {quantityOfItems.reduce(function (a, b) {
          return a + b;
        }, 0)}
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
