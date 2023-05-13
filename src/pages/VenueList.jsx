import useApi from "../hooks/useApi";
import CardVenue from "../components/CardVenue";
import { Grid } from "@mui/material";

import { filterVenuesByMediaAndName } from "../utils/filterVenuesByMediaAndName";

function VenueList() {
  const { data, isLoading, catchError, responseError } = useApi(
    "https://api.noroff.dev/api/v1/holidaze/venues?sortOrder=asc&_owner=true",
    "GET"
  );
  const filteredData = filterVenuesByMediaAndName(data);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (catchError || responseError) {
    return <p>Error</p>;
  }
  return (
    <Grid container wrap="wrap" spacing={2}>
      {filteredData.map((venueItem) => {
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
  );
}

export default VenueList;
