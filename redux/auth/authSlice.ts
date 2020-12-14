import { createSlice } from "@reduxjs/toolkit";
import { setCurrentUser } from "./actionCreator";
import {
  setCurrentUserFulFilled,
  setCurrentUserFulPending,
  setCurrentUserFulRejected,
} from "./authReducers";
const initialState: IInitialState = {
  currentUser: null,
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentUser.fulfilled, setCurrentUserFulFilled);
    builder.addCase(setCurrentUser.fulfilled, setCurrentUserFulPending);
    builder.addCase(setCurrentUser.fulfilled, setCurrentUserFulRejected);
  },
});

export default authSlice.reducer;
