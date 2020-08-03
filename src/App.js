import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route, Redirect, BrowserRouter } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";
import MainPage from "./pages/Main";
import LoginPage from "./pages/Login";
import GalleryPage from "./pages/Gallery";
import ProfilePage from "./pages/Profile";
class App extends React.Component {
  render() {
    const { isAuth } = this.props;

    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Route path="/" exact={true} render={() => <MainPage />} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/profile">
            {isAuth ? <ProfilePage /> : <Redirect push to="/login" />}
          </Route>
          <Route path="/login">
            {isAuth ? <Redirect push to="/" /> : <LoginPage />}
          </Route>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isAuth: store.user.isAuth,
  };
};

export default withRouter(connect(mapStateToProps)(App));
