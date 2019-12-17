import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
  Dashboard,
  Absen,
  ChartLine,
  ChartPie,
  Profile
} from "./components";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
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
        <Route path="/user/register" exact={true}>
          <Register2 />
        </Route>
        <Route path="/company/register" exact={true}>
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
        <Route path="/dashboard" exact={true}>
          <Dashboard />
        </Route>
        <Route path="/dashboard/:func">
          <Dashboard />
        </Route>
        <Route path="/absen" exact={true}>
          <Absen />
        </Route>
        <Route path="/pie" exact={true}>
          <ChartPie />
        </Route>
        <Route path="/line" exact={true}>
          <ChartLine />
        </Route>
        <Route path="/profile" exact={true}>
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
