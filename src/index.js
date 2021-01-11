import React from "react";
import ReactDOM from "react-dom";
import { RouterCom } from "./Router";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";

ReactDOM.render(
  <Provider store={Store}>
    <RouterCom />
  </Provider>,
  document.getElementById("root")
);
