import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVenues } from "../features/venueSlice";
import CardVenue from "../components/CardVenue";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { searchMatch } from "../utils/searchMatch";
import Loader from "../components/Loader";
import ErrorFetch from "../components/ErrorFetch";

import { useState } from "react";

function VenueList() {
  const [currentPage, setCurrentPage] = useState(1);

  const [filteredData, setFilteredData] = useState(null);

  const dispatch = useDispatch();
  const { data, loading, error, lastFetchTime } = useSelector(
    (state) => state.venues
  );

  const searchData = useSelector((state) => state.venueSearch.searchData);

  useEffect(() => {
    if (
      !data.length ||
      (lastFetchTime && Date.now() - lastFetchTime >= 5 * 60 * 1000)
    ) {
      dispatch(fetchVenues());
    }
  }, [data.length, dispatch, lastFetchTime]);

  useEffect(() => {
    if (searchData) {
      const filteredVenues = searchMatch(
        searchData.destination,
        searchData.guests,
        searchData.priceRange,
        data
      );
      setFilteredData(filteredVenues);
      setCurrentPage(1);
    } else {
      setFilteredData(null);
    }
  }, [searchData, data]);

  const startIndex = (currentPage - 1) * 6;
  const endIndex = currentPage * 6;
  const venuesToRender = filteredData
    ? filteredData.slice(startIndex, endIndex)
    : data.slice(startIndex, endIndex);
  const count = Math.ceil((filteredData || data).length / 6);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorFetch message={"Failed to get response from database, try again"} />
    );
  }

  return (
    <>
      <SearchBar searchDataInput={searchData} />
      <Grid container wrap="wrap" spacing={2}>
        {venuesToRender.length > 0 ? (
          venuesToRender.map((venueItem) => {
            return (
              <CardVenue
                image={venueItem.media[0]}
                name={venueItem.name}
                price={venueItem.price}
                guests={venueItem.maxGuests}
                city={
                  venueItem.location.city.length > 0
                    ? venueItem.location.city
                    : "No city specified"
                }
                id={venueItem.id}
                key={venueItem.id}
              />
            );
          })
        ) : (
          <Typography variant="h3" textAlign={"center"} width={"100%"}>
            The search result has no hits
          </Typography>
        )}
      </Grid>

      {venuesToRender.length > 0 ? (
        <Stack
          spacing={2}
          sx={{ display: "flex", alignItems: "center", mt: 5, mb: 5 }}
        >
          <Pagination
            count={count}
            color="primary"
            onChange={handlePageChange}
          />
        </Stack>
      ) : null}
    </>
  );
}

export default VenueList;
