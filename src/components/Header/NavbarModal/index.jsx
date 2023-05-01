import { useState } from "react";
import RegisterForm from "../../Form/RegisterForm"
import LoginForm from "../../Form/LoginForm";
import { Box, Typography, Modal } from "@mui/material";

function NavbarModal({ icon, text }) {
  const [modal, setModal] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Box>
      <Box
        onClick={handleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        {icon}
        <Typography variant="h2" >
          {text}
        </Typography>
      </Box>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            p: 4,
            display: "flex",
            flexDirection: "column",

            gap: 5,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            {modal ? "Login" : "Sign up"}
          </Typography>
          {modal ? <LoginForm /> : <RegisterForm />}
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h4"
            sx={{ textDecoration: "underline", textAlign: "end" }}
            onClick={() => setModal(!modal)}
          >
            {modal ? "Click her if u don't have a user" : "Click her to login"}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default NavbarModal;
