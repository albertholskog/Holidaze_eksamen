import { Button } from "@mui/material";

function CustomButton({ label, type, variant, event }) {
  return (
    <Button type={type} variant={variant} onClick={event} sx={{}} >
      {label}
    </Button>
  );
}

export default CustomButton;
