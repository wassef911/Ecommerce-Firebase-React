import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
