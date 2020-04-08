import React from "react";
function GalleryImage({ title, imgURL, size, linkURL }) {
  let width;
  let height;
  if (size == "large") {
    width = 25 * 1.5;
    height = 10 * 1.5;
  } else {
    width = 25;
    height = 10 * 1.5;
  }
  let style = {
    backgroundImage: `url(${imgURL})`,
    height: `${height}em`,
    width: `${width}em`,
  };

  return (
    <div className="GalleryImage m-2" style={style}>
      <div className="sectiontitle mx-auto">
        <h1>{title.toUpperCase()}</h1>
        <h4>SHOP NOW</h4>
      </div>
    </div>
  );
}

export default GalleryImage;
