// React imports
import React from "react";
import ReactDOM from "react-dom/client";
// React router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Material UI imports
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";
// Own imports
import Home from "./Home";
import Simulator from "./Simulator";
import Results from "./Results";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[100],
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/simulator",
    element: <Simulator />,
  },
  {
    path: "/results",
    element: <Results />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
