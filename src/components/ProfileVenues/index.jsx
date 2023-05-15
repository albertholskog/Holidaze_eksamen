import { useState } from "react";
import { Button, Grid, Typography, Box, Divider } from "@mui/material";
import CardVenue from "../CardVenue";

function ProfileVenues({ bookings, venueManager, venues, setRefetch }) {
  const [showAllBookings, setShowAllBookings] = useState(false);
  const [showAllVenues, setShowAllVenues] = useState(false);

  const sortBookings = [...bookings].sort((a, b) => {
    return new Date(a.dateFrom) - new Date(b.dateFrom);
  });

  const bookingsToDisplay = showAllBookings
    ? sortBookings
    : sortBookings.slice(0, 2);

  const venuesToDisplay = showAllVenues ? venues : venues.slice(0, 2);

  return (
    <Grid item md={8}>
      <Grid
        container
        maxWidth={1}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {venueManager ? (
          <Grid item xs={12}>
            {venuesToDisplay.length > 0 ? (
              <Typography variant="h4" sx={{ mb: 2, }}>
                Your venues
              </Typography>
            ) : (
              <Typography variant="h4" sx={{ mb: 2 }}>
                You have not added any venues.
              </Typography>
            )}
          </Grid>
        ) : null}
        {venueManager
          ? venuesToDisplay.map((bookings) => (
              <CardVenue
                setRefetch={setRefetch}
                venueManager={venueManager}
                key={bookings.id}
                profile={true}
                image={bookings.media[0]}
                guests={bookings.maxGuests}
                name={bookings.name}
                id={bookings.id}
                city={bookings.location.city}
              />
            ))
          : null}
        {!showAllVenues && venues.length > 2 && (
          <Grid item xs={12} sx={{ mb: 10, display:"flex", justifyContent:"end"}}>
            <Button variant="contained" onClick={() => setShowAllVenues(true)}>
              Show all
            </Button>
          </Grid>
        )}

        <Grid item xs={12}>
          {bookingsToDisplay.length > 0 ? (
            <Typography variant="h4" sx={{ mb: 2 }}>
              Your upcoming bookings
            </Typography>
          ) : (
            <>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h4" sx={{ mb: 2 }}>
                You haven't booked anything.
              </Typography>
            </>
          )}
        </Grid>
        {bookingsToDisplay.map((booking) => (
          <CardVenue
            key={booking.id}
            profile={true}
            image={booking.venue.media[0]}
            guests={booking.guests}
            name={booking.venue.name}
            id={booking.venue.id}
            city={booking.venue.location.city}
            dateFrom={booking.dateFrom}
            dateTo={booking.dateTo}
          />
        ))}
        {!showAllBookings && sortBookings.length > 2 && (
          <Grid item xs={12} sx={{ mb: 10, display:"flex", justifyContent:"end"}}>
            <Button
              variant="contained"
              onClick={() => setShowAllBookings(true)}
            >
              Show all
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default ProfileVenues;
