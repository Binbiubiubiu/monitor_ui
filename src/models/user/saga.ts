import { put } from "redux-saga/effects";
import { message } from "antd";
import { replace } from "connected-react-router";
import { login } from "@/api/user";

export function* fetchLogin(action: any) {
  let { userName, passWord } = action.payload;
  let res;
  try {
    res = yield login({
      userName: userName.trim(),
      passWord
    });
  } catch (err) {
    yield message.error(err.message);
    return;
  }

  yield put({
    type: "SET_TOKEN",
    payload: res.data.token
  });
  message.success("登录成功");
  yield put(replace("/nav-1"));
}
