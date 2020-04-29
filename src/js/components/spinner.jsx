import React from "react";

function Spinner() {
  return (
    <div data-toggle="tooltip" data-placement="top" title="Loading ...">
      <div class="d-flex justify-content-center m-4 p-4">
        <div class="spinner-border text-primary" role="status">
          <div class="spinner-grow spinner-grow-md" role="status"></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
