import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getVenuesApi = createApi({
  reducerPath: "getVenues",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.noroff.dev/api/v1/holidaze/",
  }),
  endpoints: (builder) => ({
    getAllVenues: builder.query({
      query: () => "venues",
    }),
  }),
});

export const { useGetAllVenuesQuery } = getVenuesApi;
