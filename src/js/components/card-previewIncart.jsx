import React from "react";
import "./smallCardPreview.scss";
function SmallCardPreview({ item }) {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="small-card d-flex mb-4 mx-4 p-1">
      <div
        className="small-card-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="small-card-info pt-3 px-3">
        <h5 className="pt-2">{name}</h5>
        <h5>
          {quantity} x {price} DT
        </h5>
      </div>
    </div>
  );
}

export default SmallCardPreview;
