import { Box } from "@mui/material";
import ScrollDialog from "../ScrollDialog";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DeleteVenue from "../DeleteVenue";
import DeleteIcon from "@mui/icons-material/Delete";
import useApi from "../../hooks/useApi";
import GetVenueInfo from "../GetVenueInfo";
import UpdateVenueFrom from "../Form/UpdateVenueFrom";
import AddVenueForm from "../Form/AddVenueForm";

function CardActions({ id, setRefetch, venues }) {
  const { data, isLoading, catchError, responseError } = useApi(
    `https://api.noroff.dev/api/v1/holidaze/venues/${id}?_bookings=true`,
    "GET"
  );

  const handleClick = (e) => {
    e.preventDefault();
  };


  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "5px",
        right: "5px",
        display: "flex",
        columnGap: 1,
      }}
      onClick={handleClick}
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
        <UpdateVenueFrom  />
      </ScrollDialog>
      
      <ScrollDialog
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
      <ScrollDialog
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

export default CardActions;
