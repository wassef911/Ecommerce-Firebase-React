import React from "react";
import { default as CardPreview } from "../components/card-preview.container";

import "./section-preview.scss";

function CollectionPage({ collection }) {
  const { title, items } = collection;
  return (
    <div className="SectionPreview ">
      <h1>
        <span>{title.toUpperCase()}</span>
      </h1>
      <div className="d-flex flex-wrap justify-content-center ">
        {items.map((item) => (
          <CardPreview key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
