import React from "react";
import { ReactComponent as Toggler } from "../../../assets/open-menu.svg";

function ToogleButton() {
  return (
    <>
      <button
        className="navbar-toggler toggle"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-4"
        aria-controls="navbarSupportedContent-4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Toggler className="toggler" />
      </button>
    </>
  );
}

export default ToogleButton;
