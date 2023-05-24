import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { fetchVenues } from "../features/VenueSlice";
import CardVenue from "../components/CardVenue";
import { Grid } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { searchMatch } from "../utils/searchMatch";
import Loader from "../components/Loader";
import ErrorFetch from "../components/ErrorFetch";

function VenueList() {
  const dispatch = useDispatch();
  const { data, loading, error, lastFetchTime } = useSelector(
    (state) => state.venues
  );
  console.log(data);
  const searchData = useSelector((state) => state.venueSearch.searchData);
  console.log(searchData);

  const filteredVenues = searchData ? searchMatch(
    searchData.destination,
    searchData.guests,
    searchData.priceRange,
    data
  ): null;


  console.log(filteredVenues);
  const venuesToRender = filteredVenues || data;
  useEffect(() => {
    if (
      !data.length ||
      (lastFetchTime && Date.now() - lastFetchTime >= 5 * 60 * 1000)
    ) {
      dispatch(fetchVenues());
    }
  }, [data.length, dispatch, lastFetchTime]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorFetch message={"Failed to get response from database, try again"} />;
  }

  return (
    <>
      <SearchBar />
      <Grid container wrap="wrap" spacing={2}>
        {venuesToRender.map((venueItem) => {
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
        })}
      </Grid>
    </>
  );
}

export default VenueList;
