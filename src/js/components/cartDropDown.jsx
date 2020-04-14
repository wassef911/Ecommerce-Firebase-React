import React from "react";
import { connect } from "react-redux";
import SmallCardPreview from "./card-previewIncart";

function CartDropDown({ cartItems }) {
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
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body d-flex-column justify-content-center align-content-center ">
            {cartItems.map((item) => (
              <SmallCardPreview key={item.id} item={item} />
            ))}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm btn-block"
            >
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
