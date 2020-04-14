import React from "react";

function CartDropDown() {
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

          <div class="modal-body">lore</div>
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

export default CartDropDown;
