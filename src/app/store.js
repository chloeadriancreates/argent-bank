import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import tokenSliceReducer from "./slices/tokenSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    token: tokenSliceReducer
  }
});