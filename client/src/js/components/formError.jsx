import React from "react";

function FormError(props) {
  return <h6 className="validation animated flash fast">{props.children}</h6>;
}

export default FormError;
