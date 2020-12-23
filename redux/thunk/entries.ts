import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as RootNavigation from "../../components/Navigator/RootNavigation";
export const getAllEntries = createAsyncThunk(
  "entries/getAllEntries",
  async () => {}
);
export const createEntry = createAsyncThunk(
  "entries/createEntry",
  async (entryData: { title: string; account: string; password: string }) => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    console.log(entryData);
    const { data } = await axios.post(
      "http://localhost:3000/entities",
      entryData,
      config
    );
    if (data) {
      RootNavigation.navigate("Home");
    }
    return data;
  }
);
