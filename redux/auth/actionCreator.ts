import { createAsyncThunk } from "@reduxjs/toolkit";

export const setCurrentUser = createAsyncThunk(
  "setCurrentUser",
  async (user: ICurrentUser) => {
    return user;
  }
);
