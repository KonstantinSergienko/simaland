import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to="/" exact>
          На главную
        </NavLink>
        <NavLink to="/gallery">Новости</NavLink>
        <NavLink to="/profile">Профиль</NavLink>
      </nav>
    );
  }
}

export default Navigation;
