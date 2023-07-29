import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import UserReducer from "./user/user.reducer";

const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
