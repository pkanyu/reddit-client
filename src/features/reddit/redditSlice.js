import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  posts: [],
  status: "idle",
  error: null,
  comments: {},
  commentsStatus: "idle",
};

// Async thunk to fetch Reddit data based on category
export const fetchRedditData = createAsyncThunk(
  "reddit/fetchRedditData",
  async (category = "popular") => {
    const response = await axios.get(
      `https://www.reddit.com/r/${category}.json`
    );
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

// Async thunk to fetch comments for a post
export const fetchPostComments = createAsyncThunk(
  "reddit/fetchPostComments",
  async (postId) => {
    const response = await axios.get(
      `https://www.reddit.com/comments/${postId}.json`
    );
    return response.data[1].data.children.map((comment) => comment.data);
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
      })
      .addCase(fetchPostComments.pending, (state) => {
        state.commentsStatus = "loading";
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        const postId = action.meta.arg;
        state.comments[postId] = action.payload;
        state.commentsStatus = "succeeded";
      })
      .addCase(fetchPostComments.rejected, (state, action) => {
        state.commentsStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default redditSlice.reducer;
