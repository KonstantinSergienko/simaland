import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { userReducer } from "./reducers/user";
import { galleryReducer } from "./reducers/gallery";

export const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  gallery: galleryReducer,
});
