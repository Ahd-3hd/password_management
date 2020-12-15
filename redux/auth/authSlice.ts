import { createSlice } from "@reduxjs/toolkit";
import { setCurrentUser } from "./actionCreator";
import {
  setCurrentUserFulFilled,
  setCurrentUserFulPending,
  setCurrentUserFulRejected,
} from "./authReducers";
const initialState: IAuthState = {
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
    builder.addCase(setCurrentUser.pending, setCurrentUserFulPending);
    builder.addCase(setCurrentUser.rejected, setCurrentUserFulRejected);
  },
});

export default authSlice.reducer;
