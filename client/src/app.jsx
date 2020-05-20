import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Particles from "react-particles-js";

import { selectCurrentUser } from "./redux/user/userSelector";
import { checkUserSession } from "./redux/user/userActions";
import params from "./js/utils/particles";

import { default as NavBar } from "./js/containers/navbar.container";
import Spinner from "./js/components/spinner";
import ErrorBoundry from "./js/components/error-boundry";

import "./app.scss";

const Homepage = lazy(() => import("./js/pages/homepage/homepage"));
const Shop = lazy(() => import("./js/pages/shop/shop"));
const Sign = lazy(() => import("./js/pages/sign/sign"));
const Checkout = lazy(() => import("./js/pages/checkout/checkout"));
const Contact = lazy(() => import("./js/pages/contact/contact"));

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  });
  return (
    <div>
      <Particles className="particles " params={params} />
      <NavBar />
      <Switch>
        <ErrorBoundry>
          <Suspense fallback={Spinner}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shop} />
            <Route
              exact
              path="/sign"
              render={() => (currentUser ? <Redirect to="/" /> : <Sign />)}
            />
            <Route exact path="/contact" component={Contact} />
            <Route path="/checkout" component={Checkout} />
          </Suspense>
        </ErrorBoundry>
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
