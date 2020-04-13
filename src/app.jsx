import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";

import NavBar from "./js/components/navbar";
import Homepage from "./js/pages/homepage/homepage";
import Shop from "./js/pages/shop/shop";
import Sign from "./js/pages/sign/sign";
import { setCurrentUser } from "./redux/user/userActions";

import "./app.css";

function App({ setCurrentUser }) {
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
