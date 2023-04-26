import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editing: false
};

export const editingSlice = createSlice({
  name: "editing",
  initialState,
  reducers: {
    toggleEditing: (state) => {
      state.editing = !state.editing;
    }
  }
});

export const { toggleEditing } = editingSlice.actions;
export default editingSlice.reducer;