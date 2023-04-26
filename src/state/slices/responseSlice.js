import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: null
};

export const responseSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    deleteResponse: (state) => {
      state.response = null;
    }
  }
});

export const { setResponse, deleteResponse } = responseSlice.actions;
export default responseSlice.reducer;