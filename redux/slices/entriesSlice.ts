import { createSlice } from "@reduxjs/toolkit";

type Entry = {
  account: string;
  password: string;
};
interface EntriesInitialState {
  entries: Entry[];
  loading: boolean;
  error: boolean;
}

const entriesInitialState = {
  entries: [],
  loading: false,
  error: false,
};

const entriesSlice = createSlice({
  name: "entries",
  initialState: entriesInitialState,
  reducers: {},
  extraReducers: (builder) => {},
});
