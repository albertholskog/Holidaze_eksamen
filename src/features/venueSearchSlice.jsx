import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: null,
};

const venueSearchSlice = createSlice({
  name: "venueSearch",
  initialState,
  reducers: {
    saveSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { saveSearchData } = venueSearchSlice.actions;

export default venueSearchSlice.reducer;