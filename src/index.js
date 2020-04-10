import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./app";

ReactDOM.render(
  <BrowserRouter>
    <App className="container-fluid" />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
