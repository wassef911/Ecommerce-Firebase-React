import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directorySelector";

import GalleryImage from "../components/gallery-image";

import "./gallery-image.scss";

function ImageGallery({ sections }) {
  return (
    <div
      id="ImageGallery"
      className="pt-3 d-flex flex-wrap justify-content-center"
    >
      {sections.map((value) => {
        return <GalleryImage key={value.id} {...value} />;
      })}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(ImageGallery);
