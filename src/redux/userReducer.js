import * as types from "./actionTypes";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_START:
    case types.CREATE_USER_START:
    case types.DELETE_USER_START:
    case types.UPDATE_USER_START:
      return { ...state };
    case types.GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case types.CREATE_USER_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
      return { ...state };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
export default userReducer;
