import axios from "axios";

function signIn(login, password) {
  return axios.post("/auth", { login: login, password: password });
}

function signOut() {
  localStorage.removeItem("isAuth");
}

export const AuthServices = { signIn, signOut };
