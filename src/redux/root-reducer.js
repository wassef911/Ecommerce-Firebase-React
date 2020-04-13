import { combineReducers } from "redux";

import userReducer from "./user/user";

export default combineReducers({
  user: userReducer,
});
