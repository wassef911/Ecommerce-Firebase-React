import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartAction";

function CartIcon({ toggleCartHidden, cartItems }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count ">
        {cartItems.map((value) => value.quantity)}
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
