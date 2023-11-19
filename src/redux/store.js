import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice"


const store = configureStore({
  reducer: {
    user: UserReducer,
    cart: cartReducer,
  },
});

export default store;
