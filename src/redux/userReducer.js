import * as types from "./actionTypes";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_START:
    case types.GET_USER_START:
    case types.CREATE_USER_START:
    case types.DELETE_USER_START:
    case types.UPDATE_USER_START:
      return { ...state, loading: true };
    case types.GET_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case types.GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case types.CREATE_USER_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
      return { ...state, loading: false };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
export default userReducer;
