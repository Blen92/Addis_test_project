import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  getUsersSuccess,
  createUserSuccess,
  deleteUserSuccess,
  updateUserSuccess,
} from "./userAction";

const getUsersApi = async () => await axios.get("http://localhost:5000/users");

const createUserApi = async (user) =>
  await axios.post("http://localhost:5000/users", user);

const deleteUserApi = async (userId) =>
  await axios.delete(`http://localhost:5000/users/${userId}`);

const updateUserApi = async (userId, userInfo) =>
  await axios.put(`http://localhost:5000/users/${userId}`, userInfo);

export function* handleUserFetch() {
  try {
    const res = yield call(getUsersApi);
    if (res.status === 200) {
      yield put(getUsersSuccess(res.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleUserCreate({ payload }) {
  try {
    const res = yield call(createUserApi, payload);
    if (res.status === 201) {
      yield put(createUserSuccess(res.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleUserDelete(userId) {
  try {
    const res = yield call(deleteUserApi, userId);
    if (res.status === 200) {
      yield put(deleteUserSuccess(userId));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleUserUpdate({ payload: { id, formValue } }) {
  try {
    const res = yield call(updateUserApi, id, formValue);
    if (res.status === 200) {
      yield put(updateUserSuccess(res.data));
    }
  } catch (error) {
    console.log(error);
  }
}
