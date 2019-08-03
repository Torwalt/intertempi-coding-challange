import React, { Component } from "react";

import Login from "../login/login.container";
import Welcome from "../welcome/welcome.container";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Login></Login>
        </div>
      </Router>
    );
  }
}
