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

function Navbar() {
  const isLogin = true;
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  console.log(matches);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (matches) {
      setOpen(false);
    }
  }, [matches]);

  const styleDropdown = {
    position: "fixed",
    top: 85,
    right: 0,
    width: "50vw",
    maxWidth: "300px",
    height: "100vh",
    bgcolor: "primary.main",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    zIndex: 1,
    rowGap: 5,
  };
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container maxWidth={"lg"} sx={{mt:3}}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
           
            variant="h1"
            aria-label="Holidaze logo"
          >
            <Logo />
          </Typography>
          {matches ? (
            ""
          ) : (
            <Box onClick={() => setOpen(!open)}>
              {!open ? <MenuIcon /> : <CloseIcon />}
            </Box>
          )}
          <Box
            sx={
              open
                ? styleDropdown
                : { display: { xs: "none", sm: "none", md: "flex" } }
            }
          >
            <NavbarLink
              text={"Home"}
              link={"/"}
              icon={<HomeIcon sx={{ color: "black.main", fontSize: 30 }} />}
            />
            <NavbarLink
              text={"Venues"}
              link={"/venues"}
              icon={
                <SearchIcon sx={{ color: "black.main", fontSize: 30 }} />
              }
            />
            {isLogin ? (
              <NavbarLink
                text={"Profile"}
                link={"/profile"}
                icon={
                  <PersonIcon sx={{ color: "black.main", fontSize: 30 }} />
                }
              />
            ) : (
              <NavbarModal
                text={"Profile"}
                icon={
                  <PersonIcon sx={{ color: "black.main", fontSize: 30 }} />
                }
              />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
