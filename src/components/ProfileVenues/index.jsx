import TabPanel from "@mui/lab/TabPanel";
import { Grid, Typography } from "@mui/material";
import CardVenue from "../CardVenue";
import ProfileTabs from "../ProfileTabs";

function ProfileVenues({ bookings, venueManager, venues, setRefetch }) {
  const sortBookings = [...bookings].sort((a, b) => {
    return new Date(a.dateFrom) - new Date(b.dateFrom);
  });
  return (
    <Grid container item md={8}>
      {venueManager ? (
        <ProfileTabs titleOne="Your venues" titleTwo="Your upcoming bookings">
          <TabPanel value="1" sx={{ p: 0, pt: 2 }}>
            <Grid container justifyContent={"space-between"}>
              {venues.length > 0 ? (
                venues.map((bookings) => (
                  <CardVenue
                    setRefetch={setRefetch}
                    venueManager={venueManager}
                    key={bookings.id}
                    profile={true}
                    image={bookings.media}
                    guests={bookings.maxGuests}
                    name={bookings.name}
                    id={bookings.id}
                    city={bookings.location.city}
                    address={bookings.location.address}
                    country={bookings.location.country}
                    meta={bookings.meta}
                    description={bookings.description}
                    price={bookings.price}
                  />
                ))
              ) : (
                <Typography> You have not added any venues.</Typography>
              )}
            </Grid>
          </TabPanel>
          <TabPanel value={venueManager ? "2" : "1"} sx={{ p: 0, pt: 2 }}>
            <Grid container justifyContent={"space-between"}>
              {sortBookings.length > 0 ? (
                sortBookings.map((booking) => (
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
                    price={booking.price}
                  />
                ))
              ) : (
                <Typography> You haven't booked anything.</Typography>
              )}
            </Grid>
          </TabPanel>
        </ProfileTabs>
      ) : (
        <ProfileTabs titleOne="Your upcoming bookings">
          <TabPanel value={venueManager ? "2" : "1"} sx={{ p: 0, pt: 2 }}>
            <Grid container justifyContent={"space-between"}>
              {sortBookings.length > 0 ? (
                sortBookings.map((booking) => (
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
                    price={booking.price}

                  />
                ))
              ) : (
                <Typography> You haven't booked anything.</Typography>
              )}
            </Grid>
          </TabPanel>
        </ProfileTabs>
      )}
    </Grid>
  );
}

export default ProfileVenues;
