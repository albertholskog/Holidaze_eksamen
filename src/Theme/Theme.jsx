import { createTheme } from "@mui/material/styles";

const color = {
  primary: "#B1411D",
  black: "#131415",
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: color.primary,
    },
    black: {
      main: color.black,
    },
    background: {
      default: "#F7F7F7",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    
    color: color.black,
    h2: {
      fontFamily: "Cantarell",
      fontWeight: 500,
      fontSize: 34,
      color: color.black,
    },
    h3: {
      fontFamily: "Cantarell",
      fontWeight: 600,
      fontSize: 24,
      color: color.black,
    },
    h4: {
      fontFamily: "Cantarell",
      fontWeight: 500,
      fontSize: 24,
      color: color.black,
    },
  },
});
