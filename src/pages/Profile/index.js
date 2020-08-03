import React from "react";
import { connect } from "react-redux";

import "./style.scss";

import { signOut } from "../../actions/UserActions";

class ProfilePage extends React.Component {
  render() {
    const { signOut } = this.props;

    return (
      <main className="main">
        <h1 className="profile__header">Профиль</h1>
        <p className="profile__paragraph">Вы авторизованы!</p>
        <button className="button_logout" onClick={() => signOut()}>
          Выйти
        </button>
      </main>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isAuth: store.user.isAuth,
  };
};

const mapDispatchToProps = {
  signOut: signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
