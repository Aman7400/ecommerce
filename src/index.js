import "./index.css";

import { ThemeProvider, createTheme } from "@mui/material";

import App from "./App";
import { AuthProvider } from "./contexts/auth";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { themeOptions } from "./utils/theme.util";

const theme = createTheme(themeOptions);

ReactDOM.render(
  <React.StrictMode>
    {/* // ! AuthProvider is not persistent */}
    {/* <AuthProvider> */}
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
