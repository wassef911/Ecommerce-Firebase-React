import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import SectionPreview from "../containers/section-preview";

function CollectionOverview({ shopData }) {
  return (
    <div>
      {shopData.map((section) => (
        <SectionPreview key={section.id} {...section} />
      ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  shopData: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
