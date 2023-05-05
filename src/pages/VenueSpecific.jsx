import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import VenuesInfo from "../components/VenueInfo";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
function VenueSpecific() {
  const { id } = useParams();
  const { data, isLoading } = useApi(
    `https://api.noroff.dev/api/v1/holidaze/venues/${id}?_owner=true&_bookings=true`
  );
 

  if (isLoading) {
    return <div>error</div>;
  }
  return (
    <Box>
      <Carousel>
        <img
          src={data.media}
          alt=""
          style={{ height: "auto", width: "500px" }}
        />
      </Carousel>
      <VenuesInfo
        created={data.created}
        description={data.description}
        id={data.id}
        city={data.location.city}
        maxGuests={data.maxGuests}
        meta={data.meta}
        name={data.name}
        ownerName={data.owner.name}
        ownerAvatar={data.owner.avatar}
        price={data.price}
        rating={data.rating}
        bookings={data.bookings}
      />
    </Box>
  );
}

export default VenueSpecific;
