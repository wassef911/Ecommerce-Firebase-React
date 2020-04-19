import React from "react";

import CardPreview from "../components/card-preview";
import "./section-preview.scss";

function SectionPreview({ title, items, routeName }) {
  return (
    <div className="SectionPreview">
      <h1>
        <span>{title.toUpperCase()}</span>
      </h1>
      <div className="fixmargin d-flex flex-wrap justify-content-sm-center justify-content-md-start ">
        {items
          .filter((item) => item.id <= 4)
          .map((item) => (
            <CardPreview key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default SectionPreview;
