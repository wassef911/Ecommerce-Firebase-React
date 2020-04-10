import React, { useEffect, useReducer } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase";

import "./app.css";

import NavBar from "./js/components/navbar";
import Homepage from "./js/pages/homepage/homepage";
import Shop from "./js/pages/shop/shop";
import Sign from "./js/pages/sign/sign";

function AuthReducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(AuthReducer, { currentUser: null });
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      dispatch({ type: "SET_CURRENT_USER", payload: { currentUser: user } });
      console.log(user);
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

export default App;
