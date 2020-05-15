import React from "react";
import { Link } from "react-router-dom";

import CardPreview from "../components/card-preview";
import "./section-preview.scss";

function SectionPreview({ title, items }) {
  return (
    <div className="SectionPreview">
      <h1>
        <span>
          <Link
            style={{
              textDecoration: "inherit",
              color: "inherit",
            }}
            to={`shop/${title}`}
          >
            {title.toUpperCase()}
          </Link>
        </span>
      </h1>
      <div className="d-flex flex-wrap justify-content-center ">
        {items
          .filter((item, id) => id < 4)
          .map((item) => (
            <CardPreview key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default SectionPreview;
