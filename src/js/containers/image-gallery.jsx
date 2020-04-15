import React from "react";
import GalleryImage from "../components/gallery-image";
import "./gallery-image.scss";

function ImageGallery() {
  return (
    <div id="ImageGallery" className="d-flex flex-wrap justify-content-center">
      {sections.map((value) => {
        return <GalleryImage key={value.id} {...value} />;
      })}
    </div>
  );
}

export default ImageGallery;
const sections = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/#hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/#jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/#sneakers",
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/#womens",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/#mens",
  },
];
