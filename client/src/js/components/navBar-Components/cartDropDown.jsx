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
      class="modal fade"
      id="exampleModalScrollable"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close btn btn-primary"
            data-dismiss="modal"
            aria-label="Close"
            onClick={toggleCartHidden}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body d-flex-column justify-content-center align-content-center ">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <SmallCardPreview key={item.id} item={item} />
              ))
            ) : (
              <div class="alert alert-warning">Yes you need new clothes !</div>
            )}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm btn-block"
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

/*
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

*/

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
