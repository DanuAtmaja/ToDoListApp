import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Welcome extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container fluid>
          <h2 className="display-3">Welcome {this.props.match.params.name}</h2>
          <h2 className="display-3">You're Successfully logged in!.</h2>
          <p className="lead">
            <Link to="/todos">Manage ToDo List</Link>
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Welcome;
