import React from "react";

function CardPreview({ name, imageUrl, price }) {
  return (
    <div>
      <div
        className="card-image py-1 d-flex flex-column-reverse"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <button type="button" class="btn btn-primary mx-4 addToCart">
          ADD TO CART
        </button>
      </div>
      <div className="card-info d-flex justify-content-between">
        <h5>{name}</h5>
        <h5>{price} DT</h5>
      </div>
    </div>
  );
}

export default CardPreview;
