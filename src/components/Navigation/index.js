import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <a href="/">На главную</a>
        <a href="/gallery">Новости</a>
        <a href="/profile">Профиль</a>
      </nav>
    );
  }
}

export default Navigation;
