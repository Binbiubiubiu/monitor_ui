import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./user/reducer";
import { History } from "history";

const createRootReducer = (history: History) =>
  combineReducers({ router: connectRouter(history), user });

export default createRootReducer;
