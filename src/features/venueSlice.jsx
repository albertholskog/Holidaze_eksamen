import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filterVenuesByMediaAndName } from "../utils/filterVenuesByMediaAndName";

const fetchVenues = createAsyncThunk("venues/fetchVenues", async () => {
  const response = await fetch(
    "https://api.noroff.dev/api/v1/holidaze/venues?sortOrder=asc"
  );
  const data = await response.json();

  return filterVenuesByMediaAndName(data);
});

const venueSlice = createSlice({
  name: "venues",
  initialState: {
    data: [],
    lastFetchTime: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVenues.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVenues.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.lastFetchTime = Date.now();
      })
      .addCase(fetchVenues.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export { fetchVenues };
export default venueSlice.reducer;
