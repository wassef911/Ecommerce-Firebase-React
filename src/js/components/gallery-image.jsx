import React from "react";
import { withRouter, Link } from "react-router-dom";

function GalleryImage({ title, imageUrl, size, linkUrl }) {
  let width;
  let height;
  if (size === "large") {
    width = 25 * 1.5;
    height = 10 * 3;
  } else {
    width = 25 * 1.03;
    height = 10 * 3;
  }
  var style = {
    backgroundImage: `url(${imageUrl})`,
    height: `${height}vh`,
    width: `${width}vw`,
  };
  return (
    <div className="GalleryImage m-3 bounceIn fast" style={style}>
      <Link to={linkUrl} style={{ textDecoration: "none" }}>
        <div className="sectiontitle mx-auto">
          <h1>{title.toUpperCase()}</h1>
          <h4>SHOP NOW</h4>
        </div>
      </Link>
    </div>
  );
}

export default withRouter(GalleryImage);
