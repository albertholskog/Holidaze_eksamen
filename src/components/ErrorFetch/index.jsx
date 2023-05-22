import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ErrorFetch({ message, label, link }) {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h3">
        {message}
      </Typography>
      <Button variant="contained" onClick={() => navigate({link})}>
        {label}
      </Button>
    </Box>
  );
}

export default ErrorFetch;
