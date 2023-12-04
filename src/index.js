import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "@material-tailwind/react";

import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <ToastContainer />
      <App />
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
