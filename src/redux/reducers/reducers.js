import { combineReducers } from "redux";
import manage_todos from "./todos";

const reducers = combineReducers({
  todos: manage_todos,
});

export default reducers;
