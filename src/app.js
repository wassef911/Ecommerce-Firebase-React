import React, { Component } from "react";
import "./index.css";
import ImageGallery from "./js/containers/image-gallery";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ImageGallery />
      </div>
    );
  }
}

export default App;
