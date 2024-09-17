import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import store from "./redux/reducer/store";


ReactDOM.render(
  //<Provider store={store}>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
  //</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
