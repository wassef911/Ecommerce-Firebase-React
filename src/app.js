import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";

import "./app.css";

import NavBar from "./js/components/navbar";
import Homepage from "./js/pages/homepage/homepage";
import Shop from "./js/pages/shop/shop";
import Sign from "./js/pages/sign/sign";

function App() {
  let unsubscribeFromAuth = null;
  let [user, setuser] = useState({ currentUser: null });
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setuser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setuser({ currentUser: userAuth });
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <NavBar currentUser={user.currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign" component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
