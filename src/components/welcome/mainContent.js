import React, { Component } from "react";
import Conatiner from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Content extends Component {
  render() {
    return (
      // <div className="container-fluid text-center">
      <Conatiner className="text-center">
        {/* <div className="row content"> */}
        <Row className="content">
          {/* <div className="col-sm-8 text-left"> */}
          <Col className="xl-1 text-center">
            <h1>Welcome</h1>
          </Col>
        </Row>
      </Conatiner >
    );
  }
}
