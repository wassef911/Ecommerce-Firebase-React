import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({ content, to, children }) {
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

export default NavbarItem;
