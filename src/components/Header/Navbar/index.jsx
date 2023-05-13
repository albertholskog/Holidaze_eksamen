import { useState, useEffect } from "react";
import Logo from "../../svg/Logo";
import NavbarLink from "../NavbarLink";
import NavbarModal from "../NavbarModal";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "../../../utils/auth";

function Navbar() {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const auth = useAuth();

  useEffect(() => {
    if (matches) {
      setOpen(false);
    }
  }, [matches]);

  const styleDropdown = {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    maxWidth: "300px",
    height: "100vh",
    bgcolor: "primary.main",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    zIndex: 10,
    gap: 5,
  };
  return (
    <AppBar position="static" elevation={0} color="transparent" sx={{mb:5}}>
      <Container maxWidth={"lg"}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h1" aria-label="Holidaze logo">
            <Logo />
          </Typography>
          {matches ? null : (
            <Box sx={{ zIndex: 20, pt: 2 }} onClick={() => setOpen(!open)}>
              {!open ? (
                <MenuIcon sx={{ fontSize: 30 }} />
              ) : (
                <CloseIcon sx={{ fontSize: 30 }} />
              )}
            </Box>
          )}
          <Box
            sx={
              open
                ? styleDropdown
                : {
                    display: { xs: "none", sm: "none", md: "flex" },
                    gap: 3,
                  }
            }
          >
            <NavbarLink
              text={"Home"}
              link={"/"}
              icon={<HomeIcon sx={{ color: "black.main", fontSize: 30 }} />}
              onClick={() => setOpen(false)}
            />
            <NavbarLink
              text={"Venues"}
              link={"/venues"}
              icon={<SearchIcon sx={{ color: "black.main", fontSize: 30 }} />}
              onClick={() => setOpen(false)}
            />
            {auth.user ? (
              <NavbarLink
                text={"Profile"}
                link={"/profile"}
                icon={<PersonIcon sx={{ color: "black.main", fontSize: 30 }} />}
                onClick={() => setOpen(false)}
              />
            ) : (
              <NavbarModal
                text={"Profile"}
                icon={<PersonIcon sx={{ color: "black.main", fontSize: 30 }} />}
              />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
