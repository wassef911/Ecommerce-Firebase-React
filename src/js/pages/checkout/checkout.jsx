import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../../redux/cart/cartSelector";
import {
  clearItem,
  decQuantity,
  addItem,
} from "../../../redux/cart/cartAction";

import "./checkout.scss";

function Checkout({ cartItems, Total, clearItem, decQuantity, addItem }) {
  return (
    <div>
      <div className="d-flex  align-items-center justify-content-around titles">
        {["Product", "Description", "Quantity", "Price", "Remove"].map(
          (value) => (
            <h4 className="title ">{value}</h4>
          )
        )}
      </div>

      <div className="d-flex flex-column align-items-center items">
        {cartItems.map((value) => (
          <div className="d-flex justify-content-between align-items-center item">
            <div
              className="img"
              style={{ backgroundImage: `url(${value.imageUrl})` }}
            ></div>
            <h5>{value.name}</h5>
            <span className="AddItems">
              <span onClick={() => decQuantity(value)}>&#10096; </span>
              <h5> {value.quantity} </h5>
              <span onClick={() => addItem(value)}> &#10097;</span>
            </span>

            <h5>{value.price}</h5>
            <h5 className="remove" onClick={() => clearItem(value)}>
              &#10005;
            </h5>
          </div>
        ))}
      </div>
      {Total > 0 ? (
        <div>
          <h4 className="total">Total : {Total} DT</h4>
        </div>
      ) : null}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  decQuantity: (item) => dispatch(decQuantity(item)),
  addItem: (item) => dispatch(addItem(item)),
});
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  Total: selectCartItemsTotal,
});
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
