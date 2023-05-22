import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import VenuesInfo from "../components/VenueInfo";
import { Box } from "@mui/material";
import CarouselVenue from "../components/Carousel/CarouselVenue";
import Loader from "../components/Loader";
import ErrorFetch from "../components/ErrorFetch";

function VenueSpecific() {
  const { id } = useParams();
  const { data, isLoading, catchError, responseError } = useApi(
    `https://api.noroff.dev/api/v1/holidaze/venues/${id}?_owner=true&_bookings=true`
  );

  if (isLoading) {
    return <Loader />;
  }

  if (catchError || responseError) {
    return <ErrorFetch message={"Failed to get response from database, try again"} />;
  }
  return (
    <Box>
      <CarouselVenue media={data.media} name={data.name} />
      <VenuesInfo
        description={data.description}
        id={data.id}
        city={data.location.city}
        maxGuests={data.maxGuests}
        meta={data.meta}
        name={data.name}
        ownerName={data.owner.name}
        ownerAvatar={data.owner.avatar}
        price={data.price}
        bookings={data.bookings}
      />
    </Box>
  );
}

export default VenueSpecific;
