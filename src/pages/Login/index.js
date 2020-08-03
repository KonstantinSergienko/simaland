import React from "react";
import { connect } from "react-redux";

import "./style.scss";

import TextInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";
import { changeLogin, changePassword, signIn } from "../../actions/UserActions";

class LoginPage extends React.Component {
  submitHandler = () => {
    const { login, password } = this.props.user;

    if (login && password) {
      this.props.signIn(login, password);
    }
  };

  render() {
    const { changeLogin, changePassword } = this.props;
    const { login, password, tooltip } = this.props.user;

    return (
      <div className="login-form">
        <label className="login-form__label">Логин:</label>
        <TextInput
          value={login}
          placeholder={"Введите логин"}
          onChange={changeLogin}
        />

        <label className="login-form__label">Пароль:</label>
        <PasswordInput
          value={password}
          placeholder={"Введите пароль"}
          onChange={changePassword}
        />

        <div className="tooltip">{tooltip}</div>

        <input
          type="submit"
          value="Войти"
          className="submit-button"
          onClick={() => this.submitHandler()}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

const mapDispatchToProps = {
  changeLogin: changeLogin,
  changePassword: changePassword,
  signIn: signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
