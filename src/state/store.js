import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import tokenSlice from "./slices/tokenSlice";
import editingSlice from "./slices/editingSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    token: tokenSlice,
    editing: editingSlice
  }
});