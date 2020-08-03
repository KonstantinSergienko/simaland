import React from "react";

import logo from "../../pics/sima-land.jpeg";
import "./style.scss";
class MainPage extends React.Component {
  render() {
    return (
      <main className="main">
        <h1 className="main__header">Тестовое задание для СИМА-ЛЕНД</h1>
        <img className="logo-pic" src={logo} alt="logo" />
      </main>
    );
  }
}

export default MainPage;
