import { Avatar, Box, Grid, Typography } from "@mui/material";
import UpdatePhotoForm from "../Form/UpdatePhotoForm";
import Logout from "../Logout";
import AddVenueForm from "../Form/AddVenueForm";
import ScrollDialog from "../ScrollDialog";

function ProfileInfo({ name, profileAvatar, venueManager, total, setRefetch }) {
  return (
    <Grid item xs={12} sm={12} md={4} sx={{display:"flex", justifyContent:{xs:"center", md:"start"}, alignItems:"start"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar src={profileAvatar} sx={{ width: 200, height: 200 }}></Avatar>
        <Typography variant="h2">Username:</Typography>
        <Typography sx={{ mb: 2, mt: 0.5 }}>{name}</Typography>
        <Typography variant="h2">Venue manager:</Typography>
        <Typography sx={{ mb: 2, mt: 0.5 }}>
          {venueManager ? "Yes" : "No"}
        </Typography>
        <Typography variant="h2">Total Bookings:</Typography>
        <Typography sx={{ mb: 2, mt: 0.5 }}>{total}</Typography>
        <ScrollDialog buttonText="Update profile photo" title="Update photo">
          {venueManager ? (
            <ScrollDialog buttonText="Add venue">
              <AddVenueForm setRefetch={setRefetch} />
            </ScrollDialog>
          ) : null}
          <UpdatePhotoForm />
        </ScrollDialog>
        <Logout />
      </Box>
    </Grid>
  );
}

export default ProfileInfo;
