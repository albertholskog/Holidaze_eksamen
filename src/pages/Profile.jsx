import { Grid } from "@mui/material";
import { useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import ProfileVenues from "../components/ProfileVenues";
import useApi from "../hooks/useApi";
import Loader from "../components/Loader";
import ErrorFetch from "../components/ErrorFetch";

function Profile() {
  const [refetch, setRefetch] = useState(false);
 
  const token = localStorage.getItem("accessToken");
  const name = localStorage.getItem("name");
  const { data, isLoading, catchError, responseError } = useApi(
    `https://api.noroff.dev/api/v1/holidaze/profiles/${name}?_bookings=true&_venues=true`,
    "GET",
    token,
    refetch
  );
  

  if (isLoading) {
    return <Loader />;
  }

  if (catchError || responseError) {
    return <ErrorFetch message={"Failed to get response from database, try again"} />;
  }
    
  

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "space-between",
          md: "space-between",
        },
        mt: 5,
        mb: 10,
      }}
    >
      <ProfileInfo
        name={data.name}
        profileAvatar={data.avatar}
        venueManager={data.venueManager}
        total={data._count.bookings}
        setRefetch={setRefetch}
      />
      <ProfileVenues
        setRefetch={setRefetch}
        bookings={data.bookings}
        venueManager={data.venueManager}
        venues={data.venues}
      />
    </Grid>
  );
}

export default Profile;
