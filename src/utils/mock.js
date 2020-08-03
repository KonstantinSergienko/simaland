import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import kaiju from "../pics/kaiju.jpg";
import eva from "../pics/evangelion.jpg";
import greatWave from "../pics/the-great-wave-off-kanagawa.jpeg";

const apiMock = new MockAdapter(axios);

const user = {
  login: "Admin",
  password: "12345",
};

const messages = {
  wrongLogin: "Неверный логин",
  wrongPassword: "Неверный пароль",
  wrongLoginAndPassword: "Неверные логин и пароль",
};

const validation = (login, password) => {
  if (login !== user.login && password !== user.password) {
    return messages.wrongLoginAndPassword;
  }

  if (login !== user.login) {
    return messages.wrongLogin;
  }

  if (password !== user.password) {
    return messages.wrongPassword;
  }
};

apiMock.onPost("/auth").reply(function (config) {
  const { login, password } = JSON.parse(config.data);
  const valid = validation(login, password);

  return valid ? [403, { message: valid }] : [200];
});

apiMock.onGet("/pictures").reply(200, {
  pics: [kaiju, eva, greatWave],
});
