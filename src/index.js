import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
