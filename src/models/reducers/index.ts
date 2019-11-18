import { combineReducers, Reducer } from "redux";

const reducer: Reducer = (state = 0, action) => {
  switch (action.type) {
    case "涨工资":
      return (state += 100);
    case "扣工资":
      return (state -= 100);
    default:
      return state;
  }
};

export default combineReducers({ reducer });
