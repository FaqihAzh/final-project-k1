import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
          <ToastContainer
            closeButton={false}
            autoClose={3000}
            hideProgressBar
            closeOnClick
            draggable={false}
            bodyClassName={() => "!py-1 !flex !justify-center !items-center"}
          />
          <div className="overflow-hidden">
            <App />
          </div>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
