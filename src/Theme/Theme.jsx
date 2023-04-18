import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: orange[500],
    },
  },
  typography: {
    fontFamily: "Cantarell",
    h1: {
      fontWeight: 600,
      fontSize:20
    },
    p: {
      fontFamily: "Open Sans",
    },
  },
});
