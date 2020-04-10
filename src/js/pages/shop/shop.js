import React from "react";
import SectionPreview from "../../containers/section-preview";
import { SHOP_DATA } from "./shopdateforpreview";

function Shop() {
  return (
    <div className="px-4">
      {SHOP_DATA.map((section) => (
        <SectionPreview key={section.id} {...section} />
      ))}
    </div>
  );
}

export default Shop;
