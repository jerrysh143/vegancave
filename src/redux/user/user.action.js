import { USER_ACTION_TYPES } from "./user.types";

export const setUser = (user) => {
  return { type: USER_ACTION_TYPES.SET_USER, payload: user };
};

export const removeUser = () => {
  return { type: USER_ACTION_TYPES.REMOVE_USER, payload: null };
};
