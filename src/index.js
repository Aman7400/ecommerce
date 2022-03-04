import "./index.css";

import { ThemeProvider, createTheme } from "@mui/material";
import { persistor, store } from "./redux/store";

import App from "./App";
import { AuthProvider } from "./contexts/auth";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
import reportWebVitals from "./reportWebVitals";
import { themeOptions } from "./utils/theme.util";

const theme = createTheme(themeOptions);

ReactDOM.render(
  <React.StrictMode>
    {/* // ! AuthProvider is not persistent */}
    {/* <AuthProvider> */}
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>
          </BrowserRouter>
        </PersistGate>
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
