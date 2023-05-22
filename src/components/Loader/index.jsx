import { Box } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <InfinitySpin width="200" color="#000" />
    </Box>
  );
}

export default Loader;
