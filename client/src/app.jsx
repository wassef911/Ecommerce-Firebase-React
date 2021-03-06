import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Particles from "react-particles-js";

import { selectCurrentUser } from "./redux/user/userSelector";
import { checkUserSession } from "./redux/user/userActions";
import params from "./js/utils/particles";

import NavBar from "./js/components/navBar-Components/navbar";
import Spinner from "./js/components/spinner";
import ErrorBoundry from "./js/components/error-boundry";
import Checkout from "./js/pages/checkout/checkout";

import "./app.scss";

const Homepage = React.lazy(() => import("./js/pages/homepage/homepage"));
const Shop = React.lazy(() => import("./js/pages/shop/shop"));
const Sign = React.lazy(() => import("./js/pages/sign/sign"));

function App({ currentUser, checkUserSession }) {
  React.useEffect(() => {
    checkUserSession();
  }, [currentUser]);
  return (
    <div>
      <Particles className="particles" params={params} />
      <NavBar />
      <Switch>
        <ErrorBoundry>
          <React.Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shop} />
            <Route
              exact
              path="/sign"
              render={() => (currentUser ? <Redirect to="/" /> : <Sign />)}
            />
            <Route path="/checkout" component={Checkout} />
          </React.Suspense>
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
