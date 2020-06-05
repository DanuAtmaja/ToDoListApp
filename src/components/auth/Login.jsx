import React, { Component } from 'react';
import './Login.scss';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    if (this.state.username === 'danu' && this.state.password === '1234') {
      this.props.history.push(`/welcome/${this.state.username}`);
    } else {
      this.setState({ showSuccessMessage: false, hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup className="box">
            {this.state.hasLoginFailed && <h2>Invalid Credentials</h2>}
            {this.state.showSuccessMessage && <h2>Login Successfully</h2>}
            <h1>Login</h1>
            <p className="text-muted">Please enter your login and password!</p>
            <Input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button onClick={this.loginClicked} className="submit">
              Login
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Login;
