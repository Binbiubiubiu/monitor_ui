import { takeEvery } from "redux-saga/effects";
import { fetchLogin } from "./user/saga";

function* rootSaga() {
  yield takeEvery("fetchLogin", fetchLogin);
}

export default rootSaga;
