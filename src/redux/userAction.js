import * as types from "./actionTypes";

export const getUsersStart = () => ({
  type: types.GET_USERS_START,
});
export const getUsersSuccess = (users) => ({
  type: types.GET_USERS_SUCCESS,
  payload: users,
});

export const createUserStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});
export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const deleteUserStart = (userId) => ({
  type: types.DELETE_USER_START,
  payload: userId,
});
export const deleteUserSuccess = (userId) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId,
});

export const updateUserStart = (userInfo) => ({
  type: types.UPDATE_USER_START,
  payload: userInfo,
});
export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
});
