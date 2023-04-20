import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../svg/Logo";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Modal,
  useMediaQuery,
  Container,
  
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Navbar() {
  const isLogin = false;
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  useEffect(() => {
    if (matches) {
      setOpen(false);
    }
  }, [matches]);

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container maxWidth={"lg"}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            minHeight: 85,
            pt: 2,
          }}
        >
          <Typography variant="h1" aria-label="Holidaze logo">
            <Logo />
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              columnGap: "3rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                to="/venues"
                style={{
                  textDecoration: "none",
                  color: "#131415",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <SearchIcon sx={{ color: "secondary.main", fontSize: 30 }} />
                <Typography variant="h2">Venues</Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#131415",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <HomeIcon sx={{ color: "secondary.main", fontSize: 30 }} />
                <Typography variant="h2">Home</Typography>
              </Link>
            </Box>

            {isLogin ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={"/profile"}
                  style={{
                    textDecoration: "none",
                    color: "#131415",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <PersonIcon sx={{ color: "secondary.main", fontSize: 30 }} />
                  <Typography variant="h2">Profile</Typography>
                </Link>
              </Box>
            ) : (
              <Box>
                <Box
                  onClick={handleOpen}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PersonIcon sx={{ color: "secondary.main", fontSize: 30 }} />
                  <Typography variant="h2">Profile</Typography>
                </Box>
                <Modal
                  open={modalOpen}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    ></Typography>
                  </Box>
                </Modal>
              </Box>
            )}
          </Box>

          {!open ? (
            <MenuIcon
              sx={{ display: { sm: "block", md: "none", fontSize: 40 } }}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <CloseIcon
              sx={{ zIndex: 2, fontSize: 40 }}
              onClick={() => setOpen(!open)}
            />
          )}

          <Box
            ref={menuRef}
            sx={{
              transform: open ? "translateX(0)" : "translateX(50vw)",
              transition: "transform 0.2s ease-in-out",
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
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                to="/venues"
                style={{
                  textDecoration: "none",
                  color: "#131415",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <SearchIcon sx={{ color: "secondary.main", fontSize: 30 }} />
                <Typography variant="h2">Venues</Typography>
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#131415",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <HomeIcon sx={{ color: "secondary.main", fontSize: 30 }} />
                <Typography variant="h2">Home</Typography>
              </Link>
            </Box>
            {isLogin ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={"/profile"}
                  style={{
                    textDecoration: "none",
                    color: "#131415",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <PersonIcon sx={{ color: "secondary.main", fontSize: 30 }} />
                  <Typography variant="h2">Profile</Typography>
                </Link>
              </Box>
            ) : (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={handleOpen}
                >
                  <PersonIcon sx={{ color: "secondary.main", fontSize: 30 }} />
                  <Typography variant="h2">Profile</Typography>
                </Box>
                <Modal
                  open={modalOpen}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    ></Typography>
                  </Box>
                </Modal>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
