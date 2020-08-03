import React from "react";

import "./style.scss";
class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation header__navigation">
        <a className="navigation__link" href="/">
          На главную
        </a>
        <a className="navigation__link" href="/gallery">
          Новости
        </a>
        <a className="navigation__link" href="/profile">
          Профиль
        </a>
      </nav>
    );
  }
}

export default Navigation;
