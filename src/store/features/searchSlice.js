import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSerachResult } from "../api";
import axios from "axios";
const initialState = {
  searchFor: "",
  data: {},
  isLoading: false,
};

export const fetchSearchResult = createAsyncThunk(
  "search/fetchSerachResult",
  async (name) => {
    const searchResult = await axios.get(getSerachResult(name));
    return {
      name: name,
      data: searchResult.data.results,
    };
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResult.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearchResult.fulfilled, (state, action) => {
      state.searchFor = action.payload.name;
      state.data = action.payload.data;
      state.isLoading = false;
    });
  },
});

export default searchSlice.reducer;
