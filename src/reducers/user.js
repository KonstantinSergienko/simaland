import checkAuth from "../utils/checkAuth";

const initialState = {
  isAuth: checkAuth(),
  login: "",
  password: "",
  tooltip: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN":
      return { ...state, login: action.payload };
    case "CHANGE_PASSWORD":
      return { ...state, password: action.payload };
    case "SIGNIN":
      return { ...state, isAuth: action.payload };
    case "SIGNOUT":
      return { ...state, isAuth: action.payload };
    case "ERROR":
      return { ...state, tooltip: action.payload };

    default:
      return state;
  }
};
