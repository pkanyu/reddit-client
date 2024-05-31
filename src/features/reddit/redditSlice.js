import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch Reddit data
export const fetchRedditData = createAsyncThunk(
  "reddit/fetchRedditData",
  async () => {
    const response = await axios.get("https://www.reddit.com/r/popular.json");
    return response.data.data.children.map((post) => post.data);
  }
);

// Async thunk to fetch search results
export const fetchSearchResults = createAsyncThunk(
  "reddit/fetchSearchResults",
  async (searchTerm) => {
    const response = await axios.get(
      `https://www.reddit.com/search.json?q=${searchTerm}`
    );
    return response.data.data.children.map((post) => post.data);
  }
);

// Reddit slice
const redditSlice = createSlice({
  name: "reddit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRedditData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRedditData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchRedditData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default redditSlice.reducer;
