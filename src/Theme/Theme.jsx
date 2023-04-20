import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#B1411D",
    },
    secondary: {
      main: "#131415",
    },
  },
  typography: {
    fontFamily: "Cantarell",

    h1: {
      fontWeight: 600,
      fontSize: 20,
    },
    h2: {
      fontWeight: 500,
      fontSize: 24,
    },
    p: {
      fontFamily: "Open Sans",
    },
    a: {
      color: "secondary.main",
    },
  },
});
