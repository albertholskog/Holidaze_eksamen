import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVenues } from "../features/VenueSlice";
import CarouselBody from "../components/Carousel/CarouselBody";
import SearchBar from "../components/SearchBar";

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <SearchBar />
      <CarouselBody data={data} />
    </>
  );
}

export default Home;
