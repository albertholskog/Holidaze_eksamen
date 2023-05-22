import { Avatar, Box, Grid, Typography } from "@mui/material";
import UpdatePhotoForm from "../Form/UpdatePhotoForm";
import Logout from "../Logout";
import AddVenueForm from "../Form/AddVenueForm";
import ScrollDialog from "../ScrollDialog";

function ProfileInfo({ name, profileAvatar, venueManager, total, setRefetch }) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "start" },
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Avatar
          variant="rounded"
          src={profileAvatar}
          sx={{ width: 200, height: 200, borderRadius: 3, mt: 1 }}
        ></Avatar>
        <ScrollDialog buttonText="Update  photo" title="Update photo">
          <UpdatePhotoForm  setRefetch={setRefetch}/>
        </ScrollDialog>
        <Typography variant="p" sx={{ mb: 1, mt: 1 }}>
          Username: {name}
        </Typography>

        <Typography variant="p" sx={{ mb: 1 }}>
          Venue manager: {venueManager ? "Yes" : "No"}
        </Typography>

        <Typography variant="p" sx={{ mb: 3 }}>
          Total bookings: {total}
        </Typography>

        {venueManager ? (
          <ScrollDialog
            buttonText="Add venue"
            buttonVariant="contained"
            title="Add new venue"
          >
            <AddVenueForm setRefetch={setRefetch} />
          </ScrollDialog>
        ) : null}
        <Logout />
      </Box>
    </Grid>
  );
}

export default ProfileInfo;
