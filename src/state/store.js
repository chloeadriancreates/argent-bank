import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import tokenSlice from "./slices/tokenSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    token: tokenSlice
  }
});