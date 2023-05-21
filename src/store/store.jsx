import { configureStore } from "@reduxjs/toolkit";
import venueReducer from "../features/venueSlice";
import venueSearchReducer from "../features/venueSearchSlice";

const store = configureStore({
  reducer: {
    venues: venueReducer,
    venueSearch: venueSearchReducer,
  },
});

export default store;
