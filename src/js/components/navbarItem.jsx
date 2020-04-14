import React from "react";
import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";

function NavbarItem({ content, to, children, location }) {
  let locationName = location.pathname;
  if (locationName == "/") locationName = "home";
  document.title = locationName.split("/").join(" ").toUpperCase();
  console.log(location);
  return (
    <>
      <li className="nav-item">
        {children ? (
          children
        ) : (
          <Link className="nav-link" to={to}>
            {content}
          </Link>
        )}
      </li>
    </>
  );
}

export default withRouter(NavbarItem);
