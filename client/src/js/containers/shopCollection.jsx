import React from "react";
import SectionPreview from "../containers/section-preview";

function CollectionOverview({ shopData }) {
  return (
    <div>
      {shopData.map((section, id) => (
        <SectionPreview key={id} {...section} />
      ))}
    </div>
  );
}

export default CollectionOverview;
