import React, { Component } from "react";

import Login from "../login/login.container";
import Welcome from "../welcome/welcome.container";

import "./App.css";


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}
