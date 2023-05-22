import { Box } from "@mui/material";
import ScrollDialog from "../ScrollDialog";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DeleteVenue from "../DeleteVenue";
import DeleteIcon from "@mui/icons-material/Delete";
import useApi from "../../hooks/useApi";
import GetVenueInfo from "../GetVenueInfo";
import UpdateVenueFrom from "../Form/UpdateVenueFrom";
import Loader from "../Loader";
import ErrorFetch from "../ErrorFetch";

function CardIcon({ id, setRefetch, venues }) {
  const { data, isLoading, catchError, responseError } = useApi(
    `https://api.noroff.dev/api/v1/holidaze/venues/${id}?_bookings=true`,
    "GET"
  );
 
  if (isLoading) {
    return (
      <Box
        sx={{
          position: "absolute",
          bottom: "5px",
          right: "5px",
          display: "flex",
          columnGap: 1,
        }}
      >
        <Loader />
      </Box>
    );
  }

  if (catchError || responseError) {
    return (
      <Box
        sx={{
          bgcolor: "#fff",
          position: "absolute",
          bottom: "5px",
          right: "5px",
          display: "flex",
          columnGap: 1,
        }}
      >
        <ErrorFetch
          message="Failed to retrieve content"
          link="/"
          label="Home"
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "5px",
        right: "5px",
        display: "flex",
        columnGap: 1,
      }}
    >
      <ScrollDialog
        icon={
          <ModeEditIcon
            sx={{
              fontSize: "25px",
              cursor: "pointer",
              bgcolor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "50%",
              width: 30,
              height: 30,
              p: "2px",
            }}
          />
        }
      >
        <UpdateVenueFrom id={id} setRefetch={setRefetch} />
      </ScrollDialog>

      <ScrollDialog
      title="Info"
        icon={
          <InfoOutlinedIcon
            sx={{
              fontSize: "25px",
              cursor: "pointer",
              bgcolor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "50%",
              width: 30,
              height: 30,
              p: "2px",
            }}
          />
        }
      >
        <GetVenueInfo id={id} data={data} />
      </ScrollDialog>
      <ScrollDialog title="Delete"
        icon={
          <DeleteIcon
            sx={{
              fontSize: "25px",
              cursor: "pointer",
              bgcolor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "50%",
              width: 30,
              height: 30,
              p: "2px",
            }}
          />
        }
      >
        <DeleteVenue id={id} setRefetch={setRefetch} />
      </ScrollDialog>
    </Box>
  );
}

export default CardIcon;
