import React, { Component } from "react";
import Conatiner from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Content extends Component {
  render() {
    return (
      <Conatiner className="text-center">
        <Row className="content">
          <Col className="xl-1 text-center">
            <h1>Welcome</h1>
          </Col>
        </Row>
      </Conatiner >
    );
  }
}
