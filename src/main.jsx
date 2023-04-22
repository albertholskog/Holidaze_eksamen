import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./Theme/Theme";
import CssBaseline from '@mui/material/CssBaseline';
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
    <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
