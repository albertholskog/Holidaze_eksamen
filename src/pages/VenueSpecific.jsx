import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import VenuesInfo from "../components/VenueInfo";
import { Box } from "@mui/material";
import CarouselVenue from "../components/Carousel/CarouselVenue";

function VenueSpecific() {
  const { id } = useParams();
  const { data, isLoading, catchError, responseError } = useApi(
    `https://api.noroff.dev/api/v1/holidaze/venues/${id}?_owner=true&_bookings=true`
  );

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (catchError || responseError) {
    return <p>Error</p>;
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
