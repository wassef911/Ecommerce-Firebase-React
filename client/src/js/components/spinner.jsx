import React from "react";

function Spinner() {
  return (
    <div data-toggle="tooltip" data-placement="top" title="Loading ...">
      <div className="d-flex justify-content-center m-4 p-4">
        <div className="spinner-border text-primary" role="status">
          <div className="spinner-grow spinner-grow-md" role="status"></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
