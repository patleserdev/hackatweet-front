import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweetsToStore: (state, action) => {
      state.value.push(action.payload);
      //   console.log(action.payload);
    },
    deleteTweet: (state, action) => {
      state.value.filter((e) => e !== action.payload);
    },
  },
});

export const { addTweetsToStore, deleteTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
