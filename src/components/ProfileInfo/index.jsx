import { Avatar, Grid, Typography } from "@mui/material";
import UpdatePhotoForm from "../Form/UpdatePhotoForm";
import Logout from "../Logout";
import AddVenueForm from "../Form/AddVenueForm";
import ScrollDialog from "../ScrollDialog";


function ProfileInfo({ name, profileAvatar, venueManager, total, setRefetch }) {
  return (
    <Grid item sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 5 }}>
      <Avatar src={profileAvatar} sx={{ width: 200, height: 200 }}></Avatar>
      {venueManager ? (
        <ScrollDialog buttonText="Add venue">
          <AddVenueForm setRefetch={setRefetch}/>
        </ScrollDialog>
      ) : null}
      <Typography>Name : {name}</Typography>
      <Typography>Venue manager: {venueManager ? "Yes" : "No"}</Typography>
      <Typography>Total Bookings: {total}</Typography>
      <ScrollDialog buttonText="Update profile photo" title="Update photo">
        <UpdatePhotoForm />
      </ScrollDialog>
      <Logout />
    </Grid>
  );
}

export default ProfileInfo;
