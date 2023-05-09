import DeleteIcon from "@mui/icons-material/Delete";

function DeleteVenue({id}) {
  return (
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
  );
}

export default DeleteVenue;
