import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./Theme/Theme";
import { ThemeProvider,CssBaseline } from "@mui/material";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
