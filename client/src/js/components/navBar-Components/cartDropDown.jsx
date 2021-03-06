import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SmallCardPreview from "./card-previewIncart";
import { toggleCartHidden } from "../../../redux/cart/cartAction";
import { selectCartItems } from "../../../redux/cart/cartSelector";

function CartDropDown({ cartItems, history, toggleCartHidden }) {
  return (
    <div
      className="modal fade"
      id="exampleModalScrollable"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <button
            type="button"
            className="close btn btn-primary"
            data-dismiss="modal"
            aria-label="Close"
            onClick={toggleCartHidden}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-body d-flex-column justify-content-center align-content-center ">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <SmallCardPreview key={item.id} item={item} />
              ))
            ) : (
              <div className="alert alert-warning">
                Yes you need new clothes !
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm btn-block"
              onClick={() => history.push("/checkout")}
            >
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
