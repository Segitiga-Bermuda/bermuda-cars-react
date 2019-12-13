import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Login,
  Register,
  Logout,
  Feature,
  Contact,
  Register2,
  Dasboard
} from "./components";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/about" exact={true}>
            <About />
          </Route>
          <Route path="/log-in" exact={true}>
            <Login />
          </Route>
          <Route path="/user/register">
            <Register2 />
          </Route>
          <Route path="/company/register">
            <Register />
          </Route>
          <Route path="/log-out" exact={true}>
            <Logout />
          </Route>
          <Route path="/contacts" exact={true}>
            <Contact />
          </Route>
          <Route path="/features" exact={true}>
            <Feature />
          </Route>
          <Route path="/dasboard" exact={true}>
            <Dasboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
