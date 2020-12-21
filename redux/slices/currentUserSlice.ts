import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../thunk/currentUser";

const currentUserInitialState: CurrentUser = {
  username: null,
  loggedIn: false,
  error: false,
  loading: false,
  passwords: [],
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: currentUserInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.loading = false;
      state.error = false;
      state.loggedIn = true;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.loggedIn = true;
      state.error = false;
      state.loading = false;
    });
    builder.addCase(signup.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const currentUserReducer = currentUserSlice.reducer;
