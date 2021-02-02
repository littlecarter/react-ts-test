import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./style.css";
import configureStore from "./store/configure";
import AppContainer from "./components/app/app-container";

const Application = (
  <Provider store={configureStore()}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(Application, document.getElementById("root"));