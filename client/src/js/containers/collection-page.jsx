import React from "react";

import CardPreview from "../components/card-preview";

import "./section-preview.scss";

function CollectionPage({ collection }) {
  const { title, items } = collection;
  return (
    <div className="SectionPreview ">
      <h1>
        <span>{title.toUpperCase()}</span>
      </h1>
      <div className="d-flex flex-wrap justify-content-center ">
        {items.map((item, id) => (
          <CardPreview key={id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
