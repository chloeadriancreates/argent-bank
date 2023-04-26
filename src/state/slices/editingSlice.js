import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editing: false
};

export const editingSlice = createSlice({
  name: "editing",
  initialState,
  reducers: {
    turnOnEditing: (state) => {
      state.editing = true;
    },
    turnOffEditing: (state) => {
      state.editing = false;
    }
  }
});

export const { turnOnEditing, turnOffEditing } = editingSlice.actions;
export default editingSlice.reducer;