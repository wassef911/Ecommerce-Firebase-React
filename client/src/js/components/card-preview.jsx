import React from "react";

function CardPreview({ item, addItem }) {
  const { name, imageUrl, price } = item;
  return (
    <div className="m-2 animated fadeIn fast ">
      <div>
        <div
          className="card-image py-2 d-flex flex-column-reverse"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <button
            type="button"
            onClick={() => addItem(item)}
            className="btn btn-primary mx-4 addToCart"
          >
            ADD TO CART
          </button>
        </div>
        <div className="card-info d-flex justify-content-between">
          <h5>{name}</h5>
          <h5>{price} DT</h5>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
