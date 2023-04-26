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
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    deleteUser: (state) => {
      state = initialState;
    }
  }
});

export const { setUser, setFirstName, setLastName, deleteUser } = userSlice.actions;
export default userSlice.reducer;