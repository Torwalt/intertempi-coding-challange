import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../Login";
import { Content } from "../MainContent";
import { Register } from "../Register";

import "./App.css";
import PrivateRoute from "../../routes/PrivateRoute"

export class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <body>
            <Content />
          </body>
        </div>
        <Switch>
          <PrivateRoute component={Content} path="/" exact/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}
