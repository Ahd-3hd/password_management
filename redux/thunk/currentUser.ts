import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk(
  "currentUser/login",
  async (credentials: { username: string; password: string }) => {
    try {
      const response = await AsyncStorage.getItem("currentUser");
      const parsed = await JSON.parse(response || "");
      console.log("parsed", parsed);
      if (
        credentials.username === parsed.username &&
        credentials.password === parsed.password
      ) {
        await AsyncStorage.setItem(
          "currentUser",
          JSON.stringify({ ...parsed, loggedIn: true })
        );
        return parsed;
      } else {
        throw new Error("incorrect credentials");
      }
    } catch (error) {
      throw error;
    }
  }
);

// TODO, proper management of local storage

export const signup = createAsyncThunk(
  "currentUser/signup",
  async (credentials: { username: string; password: string }) => {
    await AsyncStorage.setItem(
      "currentUser",
      JSON.stringify({ ...credentials, passwords: [], loggedIn: true })
    );
    return credentials;
  }
);

export const logout = createAsyncThunk("currentUser/logout", async () => {});
