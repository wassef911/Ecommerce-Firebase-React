import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectShopItems } from "../../redux/shop/shopSelector";
import SectionPreview from "../containers/section-preview";

function CollectionOverview({ shopData }) {
  return (
    <div className="px-4">
      {shopData.map((section) => (
        <SectionPreview key={section.id} {...section} />
      ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  shopData: selectShopItems,
});
export default connect(mapStateToProps)(CollectionOverview);
