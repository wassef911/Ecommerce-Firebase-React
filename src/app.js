import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./app.css";

import NavBar from "./js/components/navbar";
import Homepage from "./js/pages/homepage/homepage";
import Shop from "./js/pages/shop/shop";
import Sign from "./js/pages/sign/sign";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign" component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
