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
import "./login.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
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
                <div className="wrapper">
                  <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                  >
                    Login
                  </Button>
                  <Button
                    block
                    bsSize="large"
                    onClick={() => this.nextPath("/register")}
                  >
                    Register
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
