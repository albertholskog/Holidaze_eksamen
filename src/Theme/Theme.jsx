import { createTheme } from "@mui/material/styles";

const color = {
  primary: "#B1411D",
  black: "#131415",
  white: "#F7F7F7",
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
    white: {
      main: color.white,
    },
    background: {
      default: color.white,
    },
  },
  components: {
    MuiImageListItemBar: {
      styleOverrides: {
        title: {
          color: color.black,
          fontSize: 20,
          fontWeight: 600,
        },
        subtitle: {
          color: color.black,
          fontSize: 16,
        },
      },
    },
  },
  typography: {
    fontFamily: "Open Sans",
    color: color.black,
    h2: {
      fontFamily: "Cantarell",
      color: color.black,
      fontSize: 18,
    },
    h3: {
      fontFamily: "Cantarell",
      color: color.black,
      fontSize: 20,
      fontWeight: "600",
    },
    h4: {
      fontFamily: "Cantarell",
      color: color.black,
    },
    h6: {
      fontFamily: "Cantarell",
      fontWeight: 600,
    },
    button: {
      fontFamily: "Cantarell",
      fontSize: 14,
    },
  },
});
