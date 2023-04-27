import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: ""
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state = initialState;
    }
  }
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;