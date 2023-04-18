import { useState, useEffect, useRef } from "react";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h1">Holidaze</Typography>
        {!open ? (
          <MenuIcon
            sx={{ display: { sm: "block", md: "none" } }}
            onClick={() => setOpen(!open)}
          />
        ) : (
          <CloseIcon sx={{ zIndex: 2 }} onClick={() => setOpen(!open)} />
        )}

        <Box
          ref={menuRef}
          sx={{
            transform: open ? "translateX(0)" : "translateX(50vw)",
            transition: "transform 0.2s ease-in-out",
            position: "fixed",
            top: 0,
            right: 0,
            width: "50vw",
            maxWidth: "200px",
            height: "100vh",
            backgroundColor: "#f2f2f2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            zIndex: 1,
          }}
        >
          <Typography>link</Typography>
          <Typography>link</Typography>
          <Typography>link</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
