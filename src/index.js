import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import "./css/index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./js/containers/app";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
