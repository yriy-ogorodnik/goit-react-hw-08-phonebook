import { createSlice } from "@reduxjs/toolkit";
import {
  addFollower,
  deleteFollower,
  fetchTweets,
  fetchTweetsByPage,
} from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const index = state.items.findIndex(tweet => tweet.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(tweet => tweet.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const tweetsInitialState = {
  items: [],
  limit: 3,
  isLoading: false,
  error: null,
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: tweetsInitialState,
  reducers: {
    changeLimit: (state, action) => {
      state.limit += action.payload;
    },
    deleteLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, handleFulfilled)
      .addCase(fetchTweets.pending, handlePending)
      .addCase(fetchTweets.rejected, handleRejected)
      .addCase(fetchTweetsByPage.pending, handlePending)
      .addCase(fetchTweetsByPage.fulfilled, handleFulfilled)
      .addCase(fetchTweetsByPage.rejected, handleRejected)
      .addCase(addFollower.fulfilled, handleFulfilledAdd)
      .addCase(addFollower.pending, handlePending)
      .addCase(addFollower.rejected, handleRejected)
      .addCase(deleteFollower.fulfilled, handleFulfilledDelete)
      .addCase(deleteFollower.pending, handlePending)
      .addCase(deleteFollower.rejected, handleRejected);
  },
});

export const { changeLimit, deleteLimit } = tweetsSlice.actions;

export default tweetsSlice.reducer;
