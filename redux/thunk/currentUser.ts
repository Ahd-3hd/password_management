import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk(
  "currentUser/login",
  async (credentials?: { email: string; password: string } | string) => {
    if (typeof credentials === "string") {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/auth/signin",
          undefined,
          {
            headers: {
              authorization: `Bearer ${credentials}`,
            },
          }
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    } else if (credentials) {
      try {
        const { data } = await axios.post("http://localhost:3000/auth/signin", {
          email: credentials.email,
          password: credentials.password,
        });
        await AsyncStorage.setItem("token", data.token);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  }
);

export const signup = createAsyncThunk(
  "currentUser/signup",
  async (credentials: {
    username: string;
    password: string;
    email: string;
  }) => {
    try {
      await axios.post("http://localhost:3000/auth/signup", {
        ...credentials,
      });
      const { data } = await axios.post("http://localhost:3000/auth/signin", {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      });
      await AsyncStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const logout = createAsyncThunk("currentUser/logout", async () => {});
