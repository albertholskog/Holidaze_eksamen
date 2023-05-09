import { Avatar, Grid, Typography } from "@mui/material";
import ModalCustom from "../ModalCustom";
import UpdatePhotoForm from "../Form/UpdatePhotoForm";
import Logout from "../Logout";
import AddVenueForm from "../Form/AddVenueForm";

function ProfileInfo({ name, profileAvatar, venueManager, total, setRefetch }) {
  return (
    <Grid item sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 5 }}>
      <Avatar src={profileAvatar} sx={{ width: 200, height: 200 }}></Avatar>
      {venueManager ? (
        <ModalCustom buttonText="Add venue">
          <AddVenueForm setRefetch={setRefetch}/>
        </ModalCustom>
      ) : null}
      <Typography>Name : {name}</Typography>
      <Typography>Venue manager: {venueManager ? "Yes" : "No"}</Typography>
      <Typography>Total Bookings: {total}</Typography>
      <ModalCustom buttonText="Update profile photo">
        <UpdatePhotoForm />
      </ModalCustom>
      <Logout />
    </Grid>
  );
}

export default ProfileInfo;
