import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        pt:15
      }}
    >
      <Typography variant="h3" sx={{ fontSize: 100 }}>
        404
      </Typography>
      <Typography variant="p">
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back home
      </Button>
    </Box>
  );
}

export default Error;
