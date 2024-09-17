import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import store from "./redux/reducer/store";


<<<<<<< HEAD
ReactDOM.render(
  //<Provider store={store}>
=======
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
>>>>>>> 7a840231c9ab74af8562ed23229bc61ada5474d5
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
<<<<<<< HEAD
  //</Provider>
=======
  // </Provider>
>>>>>>> 7a840231c9ab74af8562ed23229bc61ada5474d5
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
