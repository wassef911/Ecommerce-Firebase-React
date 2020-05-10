import React from "react";

function TextInput({ title, children }) {
  return (
    <>
      <div className="input-group my-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            {title}
          </span>
        </div>
        {children}
      </div>
    </>
  );
}

export default TextInput;
