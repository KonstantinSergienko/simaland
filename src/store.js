import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "react-router-redux";

import { rootReducer } from "./rootReducer";
import { browserHistory } from "./utils/history";

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(browserHistory), thunkMiddleware)
);

export default store;
