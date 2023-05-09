import { useState } from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import CardVenue from "../CardVenue";

function ProfileVenues({ bookings, venueManager, venues }) {
  const [showAllBookings, setShowAllBookings] = useState(false);
  const [showAllVenues, setShowAllVenues] = useState(false);
  console.log(venues);
  console.log(venueManager);

  const sortBookings = [...bookings].sort((a, b) => {
    return new Date(a.dateFrom) - new Date(b.dateFrom);
  });

  const bookingsToDisplay = showAllBookings
    ? sortBookings
    : sortBookings.slice(0, 2);
  const venuesToDisplay = showAllVenues ? venues : venues.slice(0, 2);

  return (
    <Grid item md={6}>
      <Grid
        container
        maxWidth={1}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Your booking
          </Typography>
        </Grid>
        {venueManager && venuesToDisplay.map((bookings) => (
          <CardVenue
            venueManager={venueManager}
            key={bookings.id}
            profile={true}
            image={bookings.media}
            guests={bookings.maxGuests}
            name={bookings.name}
            id={bookings.id}
            city={bookings.location.city}
          />
        ))}
        {!showAllVenues && venues.length > 2 && (
          <Box sx={{ display: "flex", justifyContent: "start", mb:10}}>
            <Button
              variant="contained"
              onClick={() => setShowAllVenues(true)}
            >
              Show all
            </Button>
          </Box>
        )}
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Your upcoming bookings
          </Typography>
        </Grid>
        {bookingsToDisplay.map((booking) => (
          <CardVenue
            key={booking.id}
            profile={true}
            image={booking.venue.media}
            guests={booking.guests}
            name={booking.venue.name}
            id={booking.venue.id}
            city={booking.venue.location.city}
            dateFrom={booking.dateFrom}
            dateTo={booking.dateTo}
          />
        ))}
      {!showAllBookings && sortBookings.length > 2 && (
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <Button variant="contained" onClick={() => setShowAllBookings(true)}>
            Show all
          </Button>
        </Box>
      )}
      </Grid>
    </Grid>
  );
}

export default ProfileVenues;
