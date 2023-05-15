import {
  Avatar,
  Box,
  Grid,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import WifiIcon from "@mui/icons-material/Wifi";

import VenuesBooking from "../VenueBooking";

function VenuesInfo({
  description,
  id,
  city,
  maxGuests,
  meta,
  name,
  ownerName,
  ownerAvatar,
  price,
  bookings,
}) {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar alt={ownerName} src={ownerAvatar}></Avatar>
              <Typography>{ownerName}</Typography>
            </Box>
            <Typography>${price} per night</Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2 }} />
      <Grid
        container
        rowGap={2}
        sx={{ mb: 10, mt: 3, display: "flex", justifyContent: "space-between" }}
      >
        <Grid item xs={12} md={7}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Information about venue
          </Typography>
          <Typography variant="p">{description}</Typography>
          {!matches ? <Divider sx={{ mt: 2 }} /> : null}
        </Grid>
        <Grid item xs={12} md={4}>
          <VenuesBooking
            bookings={bookings}
            maxGuests={maxGuests}
            id={id}
            name={name}
            price={price}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h4" sx={{ mb: 2 }}>
            What this place offers
          </Typography>
          {meta.wifi ? (
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <WifiIcon /> <Typography>Wifi</Typography>
            </Box>
          ) : null}
          {meta.parking ? (
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <LocalParkingIcon /> <Typography>Parking</Typography>
            </Box>
          ) : null}
          {meta.breakfast ? (
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <FreeBreakfastIcon /> <Typography>Breakfast</Typography>
            </Box>
          ) : null}
          {meta.pets ? (
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <PetsIcon /> <Typography>Pets</Typography>
            </Box>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
}

export default VenuesInfo;
