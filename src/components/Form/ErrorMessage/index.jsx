import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
function ErrorMessage({ message }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2, mb: 2 }}>
      <ErrorIcon sx={{ color: "error.main" }} />
      <Typography sx={{ color: "error.main" }} variant="span">
        {message}
      </Typography>
    </Box>
  );
}

export default ErrorMessage;
