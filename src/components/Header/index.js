import React from "react";

import "./style.scss";

import Nav from "../Navigation";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div>LOGO</div>
        <Nav />
      </header>
    );
  }
}

export default Header;
