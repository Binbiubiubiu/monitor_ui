import { Reducer } from "redux";
import { setToken } from "@/utils/auth";

const reducer: Reducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      setToken(action.payload);
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default reducer;
