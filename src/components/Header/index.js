import React from "react";

import "./style.scss";

import Nav from "../Navigation";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo_header">LOGO</div>
        <Nav />
      </header>
    );
  }
}

export default Header;
