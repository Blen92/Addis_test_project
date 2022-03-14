import * as types from "./actionTypes";
import {
  all,
  call,
  fork,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import {
  handleUserFetch,
  handleUserCreate,
  handleUserDelete,
  handleUserUpdate,
} from "./userSaga";

export function* onLoadUsers() {
  yield takeEvery(types.GET_USERS_START, handleUserFetch);
}

export function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, handleUserCreate);
}

export function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_USER_START);
    yield call(handleUserDelete, userId);
  }
}

export function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER_START, handleUserUpdate);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
