import { createStore } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middleWares = [];
if (process.env.NODE_ENV === "development")
  middleWares.push(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export const store = createStore(rootReducer, ...middleWares);

export const persistor = persistStore(store);
