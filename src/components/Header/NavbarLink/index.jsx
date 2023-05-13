import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";

function NavbarLink({ link, icon, text, onClick }) {
  return (
    <Box
      component={Link}
      to={link}
      sx={{
        display: "flex",
        alignItems: "center",

        textDecoration: "none",
      }}
      onClick={onClick}
    >
      {icon}
      <Typography variant="h2">{text}</Typography>
    </Box>
  );
}

export default NavbarLink;
