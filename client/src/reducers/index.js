import { combineReducers } from "redux";
import testReducer from "./test.js";
import userReducer from "./login&signup.js"
import threadReducer from "./thread.js"

export default combineReducers({
  // testReducer,
  userReducer,
  threadReducer
});
