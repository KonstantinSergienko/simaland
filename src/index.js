import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from "history";

import App from "./App";

import store from "./store";

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);
const routes = ["/", "/login", "/profile", "/gallery"];

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
