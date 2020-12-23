import { createSlice } from "@reduxjs/toolkit";
import { createEntry } from "../thunk/entries";

type Entry = {
  account: string;
  password: string;
  title: string;
};
interface EntriesInitialState {
  entries: Entry[];
  loading: boolean;
  error: boolean;
}

const entriesInitialState: EntriesInitialState = {
  entries: [],
  loading: false,
  error: false,
};

const entriesSlice = createSlice({
  name: "entries",
  initialState: entriesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createEntry.fulfilled, (state, action) => {
      state.loading = false;
      state.entries.push({
        account: action.payload.account,
        password: action.payload.password,
        title: action.payload.title,
      });
    });
    builder.addCase(createEntry.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createEntry.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});
