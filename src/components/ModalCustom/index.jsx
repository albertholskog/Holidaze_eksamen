import { Button, Modal, Box } from "@mui/material";
import { useState } from "react";

function ModalCustom({ buttonText, children, icon }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  
  if (icon) {
    return (
      <>
        <Box onClick={handleOpen}>{icon}</Box>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>{children}</Box>
        </Modal>
      </>
    );
  }
  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        {buttonText}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
}

export default ModalCustom;
