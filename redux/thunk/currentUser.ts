import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCurrentUser = createAsyncThunk(
  "currentUser/fetchCurrentUser",
  async () => {
    const response = await AsyncStorage.getItem("currentUser");
    return response;
  }
);
