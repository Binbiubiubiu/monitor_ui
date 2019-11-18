import { takeEvery } from "redux-saga/effects";

function* goAge() {}

function* rootSaga() {
  yield takeEvery("test", goAge);
}

export default rootSaga;
