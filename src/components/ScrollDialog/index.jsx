import {
  DialogActions,
  DialogTitle,
  DialogContent,
  Dialog,
  Button,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";

function ScrollDialog({ buttonText, children, title, icon, navbarTitle }) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  if (icon) {
    return (
      <>
        <Box
          onClick={handleClickOpen("body")}
          sx={{ display: "flex", alignItems: "center", cursor:"pointer" }}
        >
          {icon}
          {navbarTitle}
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby={`scroll-dialog-${title}`}
        >
          <DialogTitle
            sx={{ textAlign: "center" }}
            id={`scroll-dialog-${title}`}
          >
            {title}
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            {children}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
  return (
    <>
      <Button onClick={handleClickOpen("body")}>{buttonText}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby={`scroll-dialog-${title}`}
      >
        <DialogTitle id={`scroll-dialog-${title}`}>{title}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default ScrollDialog;
