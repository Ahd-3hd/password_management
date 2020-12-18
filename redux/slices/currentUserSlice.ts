import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../thunk/currentUser";

const currentUserInitialState: CurrentUser = {
  username: null,
  loggedIn: false,
  error: false,
  loading: false,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: currentUserInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.username = action.payload;
      state.error = false;
      state.loading = false;
    });
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCurrentUser.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const currentUserReducer = currentUserSlice.reducer;
