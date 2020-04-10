import React from "react";
import CardPreview from "../components/card-preview";
import "./section-preview.scss";
function SectionPreview({ title, items, routeName }) {
  return (
    <div className="SectionPreview">
      <h1>
        <span>{title.toUpperCase()}</span>
      </h1>
      <div className="d-flex flex-wrap justify-content-around">
        {items
          .filter((item) => item.id <= 4)
          .map((item) => (
            <CardPreview {...item} />
          ))}
      </div>
    </div>
  );
}

export default SectionPreview;
