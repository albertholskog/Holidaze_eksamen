import { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";

function NavbarModal({ icon, text }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  return (
    <Box>
      <Box
        onClick={handleOpen}
        sx={{
          width: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        {icon}
        <Typography variant="h2" sx={{ml:1}}>
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
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default NavbarModal;
