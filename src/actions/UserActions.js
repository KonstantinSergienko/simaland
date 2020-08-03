import { AuthServices } from "../utils/authServices";

export const changeLogin = (login) => {
  return {
    type: "CHANGE_LOGIN",
    payload: login,
  };
};

export const changePassword = (password) => {
  return {
    type: "CHANGE_PASSWORD",
    payload: password,
  };
};

export function signIn(login, password) {
  function success() {
    return { type: "SIGNIN", payload: true };
  }
  function error(message) {
    return { type: "ERROR", payload: message };
  }

  return (dispatch) => {
    AuthServices.signIn(login, password)
      .then((resp) => {
        if (resp.status === 200) {
          localStorage.setItem("isAuth", true);
          dispatch(success());
          return;
        }

        return dispatch(error(resp.data.message));
      })
      .catch((err) => {
        console.error(err);
        return dispatch(error(err.response.data.message));
      });
  };
}

export const signOut = () => {
  AuthServices.signOut();
  return { type: "SIGNOUT", payload: false };
};
