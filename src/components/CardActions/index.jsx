import { Box } from "@mui/material";
import ModalCustom from "../ModalCustom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SearchIcon from "@mui/icons-material/Search";
import DeleteVenue from "../DeleteVenue";

function CardActions({ id }) {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
      <ModalCustom
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
      ></ModalCustom>
      <ModalCustom
        icon={
          <SearchIcon
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
      ></ModalCustom>
      <DeleteVenue />
    </Box>
  );
}

export default CardActions;
