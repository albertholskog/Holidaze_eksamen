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
        <Grid item xs={6} sx={{ pt: 2 }}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="h4">{city}</Typography>
          <Typography>${price}</Typography>
          <Typography>Rooms for {maxGuests} people</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "end",
            pt: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar>{ownerAvatar}</Avatar>
            <Typography>{ownerName}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="h4">Information about venue</Typography>
            <Typography variant="p">{description}</Typography>
          </Grid>
          <Grid>
          <VenuesBooking bookings={bookings} maxGuests={maxGuests} id={id} name={name} price={price}/>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item sx={{ mt: 4 }}>
            <Typography variant="h4">What this place offers</Typography>
            {Object.entries(meta).map(([key, value]) => (
              <Typography key={key}>
                {key}: {value ? "Yes" : "No"}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default VenuesInfo;
