import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";


function NavbarLink({ link, icon, text }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <Link
        to={link}
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {icon}
        <Typography variant="h2" sx={{ ml: 1}}>
          {text}
        </Typography>
      </Link>
    </Box>
  );
}

export default NavbarLink;

