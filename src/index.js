import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
