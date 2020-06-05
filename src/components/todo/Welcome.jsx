import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Welcome extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">
            Welcome {this.props.match.params.name} You're Successfully logged
            in!.
          </h1>
          <p className="lead">
            <Link to="/todos">Manage ToDo List</Link>
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Welcome;
