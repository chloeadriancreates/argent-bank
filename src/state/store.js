import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import tokenSlice from "./slices/tokenSlice";
import responseSlice from "./slices/responseSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    token: tokenSlice,
    response: responseSlice
  }
});