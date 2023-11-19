import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../../utils/utils";

const initialState = {
  user: null,
  isLoggedIn: getToken() ? true : false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    removeUser: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
