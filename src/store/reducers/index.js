import { combineReducers } from "redux";
import count from "./conut";
import persons from "./persons";

export default combineReducers({
  count,
  persons,
});
