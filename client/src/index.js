import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
//import components
import App from "./App";
import rootReducers from "./reducers";

const store = configureStore({
  reducer: rootReducers,
  middleware: [thunk],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
