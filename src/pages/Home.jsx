import useApi from "../hooks/useApi";
import { filterVenuesByMediaAndName } from "../utils/filterVenuesByMediaAndName";
import CarouselBody from "../components/Carousel/CarouselBody";
function Home() {
  const { data, isLoading, catchError, responseError } = useApi(
    "https://api.noroff.dev/api/v1/holidaze/venues?sortOrder=asc",
    "GET"
  );
  const filteredData  = filterVenuesByMediaAndName(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (catchError || responseError) {
    return <p>Error</p>;
  }
  return (
    <>
      <CarouselBody data={filteredData} />
    </>
  );
}

export default Home;
