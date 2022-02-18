import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { themeOptions } from "./utils/theme.util";
import { ThemeProvider, createTheme } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme(themeOptions);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
