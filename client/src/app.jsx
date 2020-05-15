import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Particles from "react-particles-js";

import { selectCurrentUser } from "./redux/user/userSelector";
import { checkUserSession } from "./redux/user/userActions";

import NavBar from "./js/components/navBar-Components/navbar";
import Homepage from "./js/pages/homepage/homepage";
import Shop from "./js/pages/shop/shop";
import Sign from "./js/pages/sign/sign";
import Checkout from "./js/pages/checkout/checkout";
import Contact from "./js/pages/contact/contact";

import "./app.scss";

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  });
  const params = require("./assets/particles.json");
  return (
    <div>
      <Particles className="particles " params={params} />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/sign"
          render={() => (currentUser ? <Redirect to="/" /> : <Sign />)}
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchTpProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchTpProps)(App);
