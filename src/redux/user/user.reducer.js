import { USER_ACTION_TYPES } from "./user.types";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === USER_ACTION_TYPES.SET_USER) {
    return {
      ...state,
      user: payload,
      isLoggedIn: true,
    };
  }

  if (type === USER_ACTION_TYPES.REMOVE_USER) {
    return {
      ...state,
      user: null,
      isLoggedIn: false,
    };
  }

  return state;
};

export default UserReducer;
