import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

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
