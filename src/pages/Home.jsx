import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVenues } from "../features/venueSlice"
import CarouselBody from "../components/Carousel/CarouselBody";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import ErrorFetch from "../components/ErrorFetch";
import { Typography } from "@mui/material";
import { getLowestPricesVenue } from "../utils/getLowestPricesVenue";
import ImagesList from "../components/ImagesList";

function Home() {
  const dispatch = useDispatch();
  const { data, loading, error, lastFetchTime } = useSelector(
    (state) => state.venues
  );
  
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
  const lowestPriceVenues = getLowestPricesVenue(data).slice(0,4);
 
  return (
    <>
      <SearchBar />
      <Typography align="center" variant="h3" sx={{ mb: 3 }}>
        Check out the new venues
      </Typography>
      <CarouselBody data={data} />
      <Typography align="center" variant="h3" sx={{ mb: 3,mt:10 }}>
        Check out the cheapest venues
      </Typography>
      <ImagesList data={lowestPriceVenues} />
    </>
  );
}

export default Home;
