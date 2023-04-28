import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "../Header/Navbar";
function SharedLayout() {
  return (
    <>
      <Navbar />
      <Container maxWidth={"lg"}>
        <Outlet />
      </Container>
    </>
  );
}

export default SharedLayout;
