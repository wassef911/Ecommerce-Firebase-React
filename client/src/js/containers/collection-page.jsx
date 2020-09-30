import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";
import CardPreview from "../components/card-preview";
import "./section-preview.scss";
function CollectionPage({ collection }) {
  let { title, items } = collection;
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
const mapStateToProps = (state, OwnProps) => ({
  collection: selectCollection(
    OwnProps.match.params.collectionId.toLowerCase()
  )(state),
});

export default connect(mapStateToProps)(CollectionPage);
