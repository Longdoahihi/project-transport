/*!

=========================================================
* Now UI Kit PRO React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
//trasnsport web pages
import LoginPage from "pages/LoginPage/index.js";
import HomePage from "pages/HomePage//index.js";
// others
import './assets/css/pages/app.css'
import IntroPage from "pages/IntroPage/index.js";
import NewsPage from "pages/NewsPage/index.js";
import UserHomePage from "pages/User/UserHomePage/index.js";
import ContactPage from "pages/ContactPage/index.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/user" render={(props) => <UserHomePage {...props} />} />
      <Route path="/news" render={(props) => <NewsPage {...props} />} />
      <Route path="/introduction" render={(props) => <IntroPage {...props} />} />
      <Route path="/contact" render={(props) => <ContactPage {...props} />} />
      
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route path="/" render={(props) => <HomePage {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
