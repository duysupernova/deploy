import { combineReducers } from "redux";
import userReducer from "./user.js"
import threadReducer from "./thread.js"

export default combineReducers({
  userReducer,
  threadReducer
});
