import React, { Component } from "react";

import Navigation from "./MainContent.nav";
import Content from "./mainContent";
import "./welcome.css";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Content />
      </div>
    );
  }
}
