import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

let composeEnhancer = undefined;

if (process.env.NODE_ENV === "development") {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
