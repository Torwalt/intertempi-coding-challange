import React, { Component } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Col,
  Container,
  Row
} from "react-bootstrap";

// const UserService = require("../../services/user.service");

export class Register extends Component {
  constructor(props) {
    super(props);
    // this.UserService = UserService

    this.state = {
      email: "",
      password: "",
      confirmedPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmedPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newUser = {
      email: this.state.email,
      password: this.state.password
    };
    // UserService.createUser(newUser).then(msg => {
    //   if ((msg.type = "Error")) {
    //     console.log(msg);
    //   } else {
    //     console.log(msg);
    //     this.props.history.push("/");
    //   }
    // });
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <Container className="container">
        <Row className="centered-element">
          <Col className="col-md-offset-5 col-md-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-login">
                <FormGroup controlId="email" bsSize="large">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>
                <FormGroup controlId="confirmedPassword" bsSize="large">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl
                    value={this.state.confirmedPassword}
                    onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>
                <div className="wrapper">
                  <Button block bsSize="large" type="submit">
                    Confirm
                  </Button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
