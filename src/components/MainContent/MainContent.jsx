import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import awesomeface from "../../assets/images/awesomeface1.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export class Content extends Component {

  LogOut() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <Container className="text-center">
          <Row className="content">
            <Col className="xl-1 text-center">
              <h1>Welcome, you are logged in!</h1>
              <Image src={awesomeface} alt="Logo" fluid />
            </Col>
            <Col className="xl-1 text-center">
              <Button onClick={() => this.LogOut()}>Logout</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
