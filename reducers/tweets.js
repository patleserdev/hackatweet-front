import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweetsToStore: (state, action) => {
      state.value=(action.payload);
      //   console.log(action.payload);
    },
    deleteTweet: (state, action) => {
      state.value.filter((e) => e.tweet_id !== action.payload);
    },
  },
});

export const { addTweetsToStore, deleteTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
