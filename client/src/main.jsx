import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Router.jsx";
import { store } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
