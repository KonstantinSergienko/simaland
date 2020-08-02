import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";
import MainPage from "./pages/Main";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route path="/" exact={true} component={MainPage} />
        <Route path="/gallery">Новости</Route>
        <Route path="/profile">Профиль</Route>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
