import { Avatar, Box, Grid, Typography, Divider } from "@mui/material";

import VenuesBooking from "../VenueBooking";

function VenuesInfo({
  created,
  description,
  id,
  city,
  maxGuests,
  meta,
  name,
  ownerName,
  ownerAvatar,
  price,
  rating,
  bookings,
}) {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Typography variant="h4" sx={{ mb: 3 }}>
              {name}
            </Typography>
            <Typography variant="p">City: {city}</Typography>
            <Typography sx={{ mt: 0.5 }}>Max guests {maxGuests} </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Avatar>{ownerAvatar}</Avatar>
              <Typography>{ownerName}</Typography>
            </Box>
            <Typography>${price} per night</Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{mt:2}}/>
      <Grid container>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Information about venue</Typography>
            <Typography variant="p">{description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <VenuesBooking
              bookings={bookings}
              maxGuests={maxGuests}
              id={id}
              name={name}
              price={price}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Grid item sx={{ mt: 4 }}>
            <Typography variant="h4">What this place offers</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default VenuesInfo;
