import useApi from "../hooks/useApi";
import CardVenue from "../components/Card";
import { Grid } from "@mui/material";
import noImage from "../image/noImage.jpg"


function VenueList() {
  const { data } = useApi("https://api.noroff.dev/api/v1/holidaze/venues");
  
  
  return (
    <Grid container wrap="wrap" spacing={2}>
      {data.map((venueItem) => {
    
        return (
          <CardVenue
          image={venueItem.media.length > 0 ? venueItem.media[0] : noImage}
            name={venueItem.name}
            price={venueItem.price}
            max={venueItem.maxGuests}
            city={venueItem.location.city.length > 0 ? venueItem.location.city : "No city specified"}
            id={venueItem.id} 
            key={venueItem.id} 
          />
        );
      })}
    </Grid>
  );
}

export default VenueList;
